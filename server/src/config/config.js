const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports={
    //port:8081,
    port:process.env.PORT||8082,

    db:{
    database: process.env.DB_NAME || 'app1',
    user:process.env.DB_USER || 'app1',
    password:process.env.DB_PASS || 'app1',
        options:{
            dialect:process.env.DIALECT || 'sqlite',
            host:process.env.HOST || 'localhost',
            storage:'./app1.sqlite',
            operatorsAliases: Op
        }
    }
}