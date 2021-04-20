require(`dotenv`).config()
const express = require("express")
const app = express()
const port = process.env.PORT || 3211;
const cors = require('cors')


//DATABSE CONFIG
const db = require("./database")

const query = {
    name: "fetch-4-titles",
    text: "SELECT title FROM film FETCH FIRST 4 ROW ONLY;"
}


db.query(query, (err, q) => {
    if (err) { console.log(err.stack) }
    else {
        const obj = q.rows
        console.log(obj)
        db.end(err => {
            err ? console.log(err.stack) : console.log("Goodbye")
        })
    }
})

app.use(cors())
app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)

})

