module.exports = (sequelize, DataTypes) =>
    sequelize.define('User', {
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING,
      fName: DataTypes.STRING,
      lName: DataTypes.STRING
})