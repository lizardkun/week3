const User = require('./user')
module.exports = class VisPath {
    static getPath = function(userid) {
        if(User.existsUserid(userid)){
            const username = User.getName(userid)
            const lats= require('../data/' + username + "-path.json")
            return lats
        } else {
            return {"path": []}
        }
    }
}