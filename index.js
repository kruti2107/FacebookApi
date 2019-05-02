var express=require('express');
var {db} = require('./config/database');
var bodyparser=require('body-parser');
var app = express();
var userRoute = require('./routes/user.routes');
var userloginRoute=require('./routes/userlogin.route');
var userProfile=require('./routes/userprofile.routes');
var posts=require('./routes/posts.routes');
var cors=require('cors');
var path = require('path');

app.get('/',(req,res)=>{
    res.end("hello start property backend")
});
var ImageDir = path.join(__dirname, '/imgUploads');
app.use('/image',express.static(ImageDir));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());
if (db){
    console.log("sucess")
} else {
    console.log("not")
}
debugger;

app.use('/user',userRoute);
app.use('/userlogin',userloginRoute);
app.use('/userprofile',userProfile);
app.use('/posts',posts);

app.listen(3001, (err) => {
    if (err) {
        console.log(err)
        console.log('Error in connecting with port 3001');
    } else {
        console.log('Server has been set up on port 3001');
    }
});

