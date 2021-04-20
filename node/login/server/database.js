require(`dotenv`).config()
const { Client } = require("pg")

const client = new Client({
    host: process.env.database_host,
    port: process.env.database_port,
    user: process.env.database_user,
    password: process.env.database_password,
    database: "dvdrental",
})

client.connect(err => err ? console.log(err.stack) : console.log("Client connected successfully"))

module.exports = client;