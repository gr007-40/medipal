const mariadb = require('mariadb');
export default async function handler(req, res) {
    const dbconnection = await mariadb.createConnection({
        host: "127.0.0.1",
        database: "medipal",
        // port: 8889,
        user: "medipal",
        password: "incognito",
    });
    try {
        const query = "SELECT * FROM Hospitals";
        const values = [];
        const [data] = await dbconnection.execute(query, values);
        dbconnection.end();

        console.log(data);
        res.status(200).json({hospital_list: data});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}