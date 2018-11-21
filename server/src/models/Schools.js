module.exports = (sequelize, DataTypes) => {
 const School = sequelize.define('School', {
    name: DataTypes.STRING,
    classes:DataTypes.STRING,
    gpa:DataTypes.INTEGER,
    form:DataTypes.TEXT
})
return School
}
