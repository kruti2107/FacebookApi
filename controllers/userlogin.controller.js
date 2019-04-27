const User = require('../schemas/user.schema');

exports.postlogin = (body,done) => {
    User.findOne({where: {email: body.email}}).then((result) => {
        if(result) {
            done(null, result);
        }
        else {
            done(err);
        }
    }).catch((err) => {
        done(err);
    });
};