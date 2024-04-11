const express = require('express');
const routes = require('./routes');
const path = require('path');

const publicPath = path.join(__dirname,'..'); 
// const publicCss = path.join(__dirname,'..');  

const app = express();

routes(app);

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

module.exports = app;