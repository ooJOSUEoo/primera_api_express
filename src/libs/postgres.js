const {Client} = require("pg");

const getConnection = async() =>{
    const client = new Client({
        host: "localhost",
        port: 5432,
        user: "josue",
        password: "root",
        database: "my_store"
    });

    await client.connect();
    console.log("connected");
    return client
}

module.exports = {
    getConnection
}