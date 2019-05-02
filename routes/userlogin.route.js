const { Router } = require('express');
const router = Router();
var jwt = require('jsonwebtoken');
var {postlogin} =require('../controllers/userlogin.controller');
const bcrypt = require('bcryptjs');
var secretKey = 'key';
router.post('/login', (req, res) => {
    postlogin(req.body, (err, result) => {
        if (err) {
            res.status(400).send({ message: 'Email ID Not Exist', result: false });
        } else {
            var hash = bcrypt.compareSync(req.body.password, result.password);
            console.log(result.password);
            if (!hash) {
                var token = jwt.sign({ email: result.email }, secretKey, {
                    expiresIn: 86400 // expires in 24 hours
                });

                res.status(200).send({ message: 'Login Successfully', result: true, token: token, role: result.role, id: result.id });
            } else {
                res.status(400).send({ message: 'Password In Correct', result: false });
            }
        }
    });
});

module.exports = router;
