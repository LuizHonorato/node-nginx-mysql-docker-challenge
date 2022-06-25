const express = require('express')
const mysql = require('mysql')
const app = express()

const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const connection = mysql.createConnection(config)

const sql = `INSERT INTO people (name) values('Luiz Honorato')`
connection.query(sql)

app.get('/', (req, res) => {
    connection.query(`SELECT name FROM people`, (error, results, fields) => {
        res.send(`
          <h1>FullCycle Rocks!</h1>
          <ol>
            ${!!results.length ? results.map(el => `<li>${el.name}</li>`).join('') : ''}
          </ol>
        `)
      })    
})

connection.end

app.listen(port, () => {
    console.log(`App runing on port ${port}`)
})