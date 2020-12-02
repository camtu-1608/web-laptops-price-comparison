const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//import models
require('./models/Product');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    () =>console.log('connected to db'));

app.use(bodyParser.json());

//import routes
require('./routes/productRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })

}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});