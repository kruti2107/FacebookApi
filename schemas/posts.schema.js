const Sequlize=require('sequelize');
const {db}=require('../config/database');
const postSchema=db.define('posts',{
    id:{
        type:Sequlize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequlize.STRING,
        allowNull:false
    },
    postimage:{
        type:Sequlize.STRING
    },
    description:{
        type:Sequlize.STRING,
    },
    likes:{
        type:Sequlize.INTEGER,
        default:0
    }
});
postSchema.sync({force:false}).then(()=>{
    debugger;
    console.log("sucess");
}).catch((err)=>{
    console.log(err)
});

module.exports = postSchema;