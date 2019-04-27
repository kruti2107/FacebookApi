const Sequelize = require('sequelize');
const {db} = require('../config/database');

const User=db.define('loginusers',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
    }
);

User.sync({force:false}).then(()=>{
    console.log("sucess");
}).catch((err)=>{
    console.log(err)
});

module.exports = User;