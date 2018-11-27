module.exports = (sequelize, DataTypes) => {
 const Class = sequelize.define('Class', {
    name: DataTypes.STRING,
    classes:DataTypes.STRING,
    gpa:DataTypes.INTEGER,
    form:DataTypes.TEXT
})
return School
}
