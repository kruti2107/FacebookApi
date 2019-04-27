const Sequelize = require('sequelize');
const Op = Sequelize.Op;
debugger;
exports.db = new Sequelize('fbdemo', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    operatorsAliases: Op,
});

if(exports.db){
    console.log("Database connection done successfully!!!");
}else{
    console.log("not done")
}