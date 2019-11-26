fs = require('fs');

var filename = 'user_data.json';

data = fs.readFileSync(filename, 'utf-8');

users_reg_data = JSON.parse(data);

console.log(users_reg_data.itm352.password); //allows to pull up password info and see if string or object. without type of it shows object.