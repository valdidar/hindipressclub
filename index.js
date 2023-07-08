const express = require('express')
var exphbs  = require('express-handlebars');

const path = require('path')
const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'static')))  
app.use('/', require(path.join(__dirname, 'routes/blog')))

app.listen(port, () => {
  console.log(`blog app listening on port ${port}`)
})