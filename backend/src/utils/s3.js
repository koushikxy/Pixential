const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  signatureVersion: 'v4'
});

const generatePresignedUrl = async (key, contentType) => {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET,
    Key: key,
    Expires: 60 * 5, // 5 minutes
    ContentType: contentType
  };

  try {
    const url = await s3.getSignedUrlPromise('putObject', params);
    return url;
  } catch (error) {
    throw new Error('Error generating S3 presigned URL');
  }
};

module.exports = { generatePresignedUrl };
