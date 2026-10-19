const fs = require('fs/promises');
const path = require('path');

const bucket = process.env.AWS_S3_BUCKET;
const useS3 = Boolean(bucket && process.env.AWS_ACCESS_KEY_ID);
const useDb = !useS3 && process.env.FILE_STORE === 'db';
const localDir = path.join(__dirname, '../../uploads');

let s3;
const getS3 = () => {
  if (!s3) {
    const AWS = require('aws-sdk');
    s3 = new AWS.S3({ region: process.env.AWS_REGION, signatureVersion: 'v4' });
  }
  return s3;
};

const db = () => require('../config/db').prisma.fileBlob;

const save = async (key, buffer, mimeType) => {
  if (useDb) return db().create({ data: { key, data: buffer } });
  if (useS3) return getS3().putObject({ Bucket: bucket, Key: key, Body: buffer, ContentType: mimeType }).promise();
  const file = path.join(localDir, key);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, buffer);
};

const read = async (key) => {
  if (useDb) return Buffer.from((await db().findUnique({ where: { key } })).data);
  if (useS3) return (await getS3().getObject({ Bucket: bucket, Key: key }).promise()).Body;
  return fs.readFile(path.join(localDir, key));
};

const remove = async (key) => {
  if (useDb) return db().deleteMany({ where: { key } });
  if (useS3) return getS3().deleteObject({ Bucket: bucket, Key: key }).promise();
  await fs.rm(path.join(localDir, key), { force: true });
};

module.exports = { save, read, remove };
