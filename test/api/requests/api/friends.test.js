process.env.NODE_ENV = 'test';
const Friend = require('../../../../app/models').Friend;

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../../../../app');

let expect = chai.expect;
chai.use(chaiHttp);

/*
* Test the GET /api/friends route
*/
describe('/GET api/friends', () => {
  beforeEach(async () => {
    // Before each test we empty the database
    await Friend.destroy({
      where: {},
      truncate: true
    });
  });

  it('it should GET all the friends data', async () => {
    await Friend.create({
      firstName: 'Borris',
      lastName: 'Johnson',
      emailAddress: 'bojo@example.com'
    });
    await Friend.create({
      firstName: 'John',
      lastName: 'Doe',
      emailAddress: 'john.doe@example.com'
    });
    const res = await chai.request(app).get('/api/friends');

    expect(res).to.have.status(200);
    const expectedFriends = await Friend.findAll({ raw: true });
    res.body.forEach((returnedFriend, index) => {
      expect(returnedFriend.firstName).to.eq(expectedFriends[index].firstName);
      expect(returnedFriend.lastName).to.eq(expectedFriends[index].lastName);
      expect(returnedFriend.emailAddress).to.eq(expectedFriends[index].emailAddress);
    });
  });
});

/*
 * Test the GET /api/friends/:id route
 */
describe('GET api/friends/:id', () => {
  it('should GET the friend record', async () => {
    const record = await Friend.create({
      firstName: 'Borris',
      lastName: 'Johnson'
    });
    const res = await chai.request(app).get(`/api/friends/${record.id}`);

    expect(res).to.have.status(200);
    expect(res.body.firstName).to.eq(record.firstName);
    expect(res.body.lastName).to.eq(record.lastName);
  });
});
