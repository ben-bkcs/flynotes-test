let expect = require('chai').expect;
const Friend = require('../../../app/models').Friend;

describe('MODEL Friend', () => {
  it('should create a Friend record', async () => {
    const friendData = await Friend.create({
      firstName: 'John',
      lastName: 'Doe',
      createdAt: new Date(),
      updatedAt: new Date(),
      emailAddress: 'john.doe@example.com'
    });

    const data = await Friend.findAll();
    const newRecord = data[data.length - 1];
    expect(newRecord.dataValues.id).to.eq(friendData.dataValues.id);
    expect(newRecord.dataValues.firstName).to.eq(friendData.dataValues.firstName);
    expect(newRecord.dataValues.lastName).to.eq(friendData.dataValues.lastName);
    expect(newRecord.dataValues.emailAddress).to.eq(friendData.dataValues.emailAddress);
  });
});
