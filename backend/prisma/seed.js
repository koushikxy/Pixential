const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding default Admin user...');

  const hashedPassword = await bcrypt.hash('password123', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@agencyx.com' },
    update: {},
    create: {
      email: 'admin@agencyx.com',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  console.log('\n✅ Admin user successfully seeded!');
  console.log('-----------------------------------');
  console.log(`Email: ${admin.email}`);
  console.log(`Password: password123`);
  console.log(`Role: ${admin.role}`);
  console.log('-----------------------------------\n');
}

main()
  .catch((e) => {
    console.error('Failed to seed database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
