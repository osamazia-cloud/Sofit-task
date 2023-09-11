const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const secretValue = process.env.SECRET_VALUE || 'default_value';

app.get('/', (req, res) => {
  res.send(`Hello World ${secretValue}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
