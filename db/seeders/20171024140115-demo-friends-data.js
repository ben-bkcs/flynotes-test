module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Friends',
      [
        {
          firstName: 'John',
          lastName: 'Doe',
          createdAt: new Date(),
          updatedAt: new Date(),
          emailAddress: 'john.doe@example.com'
        },
        {
          firstName: 'Albert',
          lastName: 'Einstein',
          createdAt: new Date(),
          updatedAt: new Date(),
          emailAddress: 'Albie@example.com'
        },
        {
          firstName: 'Blaise',
          lastName: 'Pascal',
          createdAt: new Date(),
          updatedAt: new Date(),
          emailAddress: 'blaise.pascal@example.com'
        }
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Friends', null, {});
  }
};
