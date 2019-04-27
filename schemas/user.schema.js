const Sequelize = require('sequelize');
const {db} = require('../config/database')
debugger;
const userSchema = db.define(
    'registered_users',{

        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        firstName:{
            type: Sequelize.STRING
        },
        lastName:{
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        phoneNo: {
            type: Sequelize.STRING
        },
        DOB:{
            type: Sequelize.DATEONLY
        },
        gender:{
          type:Sequelize.INTEGER
        },
        password: {
            type: Sequelize.STRING
        },

    });

userSchema.sync({force:false}).then(()=>{
    debugger;
    console.log("sucess");
}).catch((err)=>{
    console.log(err)
});

module.exports = userSchema;