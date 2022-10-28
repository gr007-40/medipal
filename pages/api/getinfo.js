const mariadb = require('mariadb');
let connection = mariadb.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MariaDB',
    database: 'medipal'
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Database Connection Successful.');
});

function getUsers(req, res) {
    res.status(200).json({ users: 'Will return user object'})
}


export default getUsers;