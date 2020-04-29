const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')
const db = require('./helpers/db')

db();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes)


app.listen(3000, () => console.log('Example app listening on port 3000!'))

module.exports = app