const Sequelize =  require('sequelize')
const {db} = require('../config/database')

const Profile =  db.define('profile',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    image:{
        type:Sequelize.STRING,
        allowNull:false
    },
});
Profile.sync({force:false}).then(()=>{
    debugger;
    console.log("sucess");
}).catch((err)=>{
    console.log(err)
});

module.exports = Profile;