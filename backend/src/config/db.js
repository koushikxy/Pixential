const { PrismaClient } = require('@prisma/client');
const { createClient } = require('redis');
const logger = require('../utils/logger');

// Prisma MySQL Client
const prisma = new PrismaClient();

// Redis Client
const redisClient = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});

redisClient.on('error', (err) => logger.error('Redis Client Error', err));
redisClient.on('connect', () => logger.info('Connected to Redis'));

const connectDB = async () => {
  try {
    await prisma.$connect();
    logger.info('Connected to MySQL via Prisma');
    await redisClient.connect();
  } catch (error) {
    logger.error('Database connection failed', error);
    process.exit(1);
  }
};

module.exports = { prisma, redisClient, connectDB };
