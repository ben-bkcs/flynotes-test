const Friend = require('../models').Friend;
const { Op } = require('sequelize');

module.exports = {
  index: async (req, res) => {
      try {
        const filterObject = {};
        if (req.query.filter) {
          const fitlerValue = `%${req.query.filter}%`;
          // firstName LIKE %filterValue% OR lastName LIKE %filterValue% OR emailAddress LIKE %filterValue%
          filterObject[Op.or] = [
            {
              firstName: {
                [Op.iLike]: fitlerValue // iLike = case insensitive match
              }
            },
            {
              lastName: {
                [Op.iLike]: fitlerValue
              }
            },
            {
              emailAddress: {
                [Op.iLike]: fitlerValue
              }
            }
          ]
        }
        
        const friends = await Friend.findAll({ where: filterObject });
        res.status(200).send(friends)
      } catch (err) {
        res.status(500).send(error)
      }
  },
  show: (req, res) => {
    return Friend.findByPk(parseInt(req.params.id))
      .then(friend => {
        if (!friend) {
          return res.status(404).send({
            message: 'Friend Not Found'
          });
        }
        return res.status(200).send(friend);
      })
      .catch(error => res.status(400).send(error));
  }
};
