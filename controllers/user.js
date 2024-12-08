const User = require('../models/user')
exports.loginUser = function (req, res, next) {
    if (User.verify(req.body.userid,req.body.password)) {
        session = req.session;
        session.userid = req.body.userid;
        session.username =
        User.getName(req.body.userid)
        res.render("index.ejs", { 'userid':
        session.userid })
    }
    else {
        console.log(req.body.username + " do not match" + req.body.password)
        res.send('Invalid username or password.<ahref="/">Try again</a>');
    }
    }
exports.logoutUser = function (req, res, next) {
    req.session.destroy();
    res.redirect('/');
}
