const user =require('../schemas/user.schema')

exports.post=(body,done)=>{

    user.create(body).then((userData)=>{
        if(userData){
            done(null,userData)
        }
    }).catch((err)=>{
        console.log(err)
    })
};

exports.get=(done)=>{
    user.findAll({}).then((userData)=>{
        if(userData){
            done(null,userData)
        }
    })
};

