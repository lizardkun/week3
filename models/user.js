users = [
    { userid: 'fred@fred.com', password: '1234', username:
    'fred' },
    { userid: 'vane@vane.com', password: '1234', username:
    'vane' },
    ]
// const fs = require('fs');

// fs.readFile('./data/users.json', 'utf8', (err, data) => {
//     if (err) {
//     console.error('Error reading the JSON file:', err);
//     return;
//     }
//     users = JSON.parse(data);  // Parse the JSON string
  
// });

module.exports = class User {
    static verify = function (userid, password) {
    var flag = false;
    users.forEach(u => {
        if (u.userid == userid && u.password ==
        password) {
            flag = true
        }
});
return flag
}
static getName = function (userid) {
    var result = undefined;
    users.forEach(u => {
        if (u.userid == userid) {
            result = u.username
        }
    });
    return result
    }
static existsUserid = function(userid){
    var flag = false;
    users.forEach(u => {
        if (u.userid == userid) {
            flag = true
        }
    });
    return flag
    }
}

