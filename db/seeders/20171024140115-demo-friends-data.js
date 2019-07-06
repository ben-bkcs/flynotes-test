module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Friends',
      [
        {
          firstName: 'John',
          lastName: 'Doe',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Albert',
          lastName: 'Einstein',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Blaise',
          lastName: 'Pascal',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Friends', null, {});
  }
};
