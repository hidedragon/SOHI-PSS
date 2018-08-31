const Sequelize = require('sequelize')
const path = require('path')

//aliyun mysql: 47.100.12.72
//aliyun lz mysql: 39.106.209.246

const mysqlDb = new Sequelize("sohi", "root", "123456", {
    host: "127.0.0.1",
    port:"3306",
    dialect: "mysql",
    pool: {
        max: 20,
        min: 0,
        acquire: 100000,//ms as unit
        idle: 100000
    },
    operatorsAliases: false,
    logging:function (sql) {
    //    console.log("执行sql:"+sql);
    }
})

module.exports = {
    mysqlDb,
    Sequelize
}
