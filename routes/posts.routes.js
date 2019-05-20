const {Router} = require('express');
const router= Router();
const multer=require('multer');
const path=require('path');
const {newpost,getPosts,patchById}= require('../controllers/posts.controller');

var storage=multer.diskStorage({
    destination:function (req,file,callback) {
        callback(null,'./imgUploads')
    },
    filename:function (req,file,callback) {
        callback(null,file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    },
    size:{
        height:500,
        width:500
    }
});
var upload = multer({storage:storage});
router.post('/',upload.single('postimage'), (req,res,next)=>{
    if(req.file){
        req.body.postimage = req.file.filename;
    }
    if(req.body.likes==null){
        req.body.likes=0;
    }
    newpost(req.body,(err,result)=>{
        if(err){
            res.statusCode=400;
            res.json(err);
        }
        else{
            res.statusCode=200;
            res.json(result);
        }
    })
});
router.get('/getpost',(req,res)=>{
    getPosts((err,result)=>{
        if(err){
            res.json(err)
            res.statusCode = 404;
            console.log(err)
        }else{
            res.json(result);
            console.log("result is",result)
        }
    })
});

router.patch('/updatelike/:id',(req,res)=>{
    const id=req.params.id;
   console.log(req.body);
    patchById(id,req.body,(err,result)=>{

        if(err){
            res.statusCode=400;
            res.json(err);
        }
        else{
            res.statusCode=200;
            res.json(result);
            console.log(result.affectedRows);
        }
    })
});
module.exports=router;