const { prisma } = require('../config/db');
const logger = require('../utils/logger');

const getClients = async (req, res) => {
  try {
    const clients = await prisma.client.findMany({
      include: { locations: true }
    });
    res.json(clients);
  } catch (error) {
    logger.error('Error fetching clients:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const createClient = async (req, res) => {
  try {
    const { name, locations } = req.body;
    const client = await prisma.client.create({
      data: {
        name,
        userId: req.user.id,
        locations: {
          create: locations // Array of location objects { address, city, state, zip }
        }
      },
      include: { locations: true }
    });
    res.status(201).json(client);
  } catch (error) {
    logger.error('Error creating client:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getClients, createClient };
