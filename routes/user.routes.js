const {Router} = require('express')
var router = new Router()
const {post,get}=require('../controllers/user.controller')

router.post('/',(req,res)=>{
    debugger;
    console.log("body is" , req.body)
    post(req.body,(err,result)=>{
        if(err){
            res.json(err);
            res.statusCode = 404;
            console.log(err);
        }else{
            res.json(result);
            res.statusCode = 200;
            debugger;
            console.log("result is" ,result)
        }
    })
});
router.get('/getUser',(req,res)=>{
    get((err,result)=>{
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


module.exports=router;
