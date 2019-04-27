var express=require('express');
var {db} = require('./config/database');
var bodyparser=require('body-parser');
var app = express();
var userRoute = require('./routes/user.routes');
var userloginRoute=require('./routes/userlogin.route');
app.get('/',(req,res)=>{
    res.end("hello start property backend")
})
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))
if (db){
    console.log("sucess")
} else {
    console.log("not")
}
debugger;

app.use('/user',userRoute);
app.use('/userlogin',userloginRoute);

app.listen(3001, (err) => {
    if (err) {
        console.log(err)
        console.log('Error in connecting with port 3001');
    } else {
        console.log('Server has been set up on port 3001');
    }
});

