// Purpose: Main application code
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8080;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/welcome.html');
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App listening at http://0.0.0.0:${port}`);
});
