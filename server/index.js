const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
module.exports = app;

app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(express.static(path.join(__dirname, '..', 'node_modules', 'font-awesome', 'css')))
app.use('/fonts', express.static(path.join(__dirname, '..', 'node_modules', 'font-awesome', 'fonts')))
app.use('/api', require('./api'))

app.use((req, res, next) => {
    if (path.extname(req.path).length > 0) {
      res.status(404).end()
    } else {
      next()
    }
});
  
app.get('/', (req, res, next) => {
    //res.send('Hello')
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'))
});

app.use((err, req, res, next) => {
    console.error(err, typeof next)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })

