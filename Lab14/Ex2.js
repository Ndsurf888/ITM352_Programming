fs = require('fs');

var filename = 'user_data.json';

if (fs.existsSync(filename)) { //checking to see if the file exist or not. //must be before the file to be read
    stats = fs.statsync(filename);

    console.log(filename + 'has' + stats.size + 'characters');


    data = fs.readFileSync(filename, 'utf-8');

    users_reg_data = JSON.parse(data);

    console.log(users_reg_data.itm352.password);

} else {
    console.log(filename + 'does not exits!');
}