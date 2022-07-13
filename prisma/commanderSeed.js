const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const commander1 = await prisma.commander.upsert({
      where: { name: 'commander1' },
      update: {},
      create: {
        name: 'commander1',
				name: 'carlo',
				lang: 'javascript',
                missionCommander: 'node',
                enrollments: 1523,
                hasCertification: true
      },
    });
    const commander2 = await prisma.commander.upsert({
      where: { name: 'commander2' },
      update: {},
      create: {
        name: 'commander2',
				name: 'Fernanda',
				lang: 'java',
                missionCommander: 'spring',
                enrollments: 1404,
                hasCertification: true
      },
    });

    console.log('Create 2 comanders');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
