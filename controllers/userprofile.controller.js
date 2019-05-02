const Profile=require('../schemas/userprofile.schema');

exports.post=(body,done)=>{

    Profile.create(body).then((newProduct)=>{
        if(newProduct){
            done(null,newProduct)
        }
    }).catch((err)=>{
        console.log(err)
    })
};