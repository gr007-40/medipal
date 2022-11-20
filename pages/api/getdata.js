const mariadb = require('mariadb');
export default async function handler(req, res) {
    const dbconnection = await mariadb.createConnection({
        host: "127.0.0.1",
        database: "medipal",
        // port: 8889,
        user: "root",
        password: "MariaDB",
//socketPath: '\\\\.\\pipe\\MySQL'
    });
    try {
        const query = "SELECT * FROM hospital_list";
        const values = [];
        const [data] = await dbconnection.execute(query, values);
        await dbconnection.end();

        res.status(200).json({hospital_list: data});
    } catch (error) {
        // unhide to check error
        res.status(500).json({error: error.message});
    }
}