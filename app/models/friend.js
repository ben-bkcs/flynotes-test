module.exports = (sequelize, DataTypes) => {
  let Friend = sequelize.define('Friend', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    emailAddress: DataTypes.STRING
  });
  return Friend;
};
