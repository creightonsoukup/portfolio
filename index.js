const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 8080

const app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(port);
console.log('App listening on port:', port)
