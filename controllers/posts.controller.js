const Posts=require('../schemas/posts.schema');

exports.newpost=(body,done)=>{

    Posts.create(body).then((newPost)=>{
        if(newPost){
            done(null,newPost)
        }
    }).catch((err)=>{
        console.log(err)
    })
};

exports.getPosts=(done)=>{
    Posts.findAll({}).then((postData)=>{
        if(postData){
            done(null,postData)
        }
    })
};

exports.patchById=(id,body,done)=>{
    Posts.findOne({where:{id:id}}).then((getdata)=>{
        //console.log(getdata);
        if(getdata){
            Posts.update(body,{where:{id:id}}).then((data)=>{
                done(null,data)
            }).catch((err)=>{
                console.log(err)
            })
        }
    })
};