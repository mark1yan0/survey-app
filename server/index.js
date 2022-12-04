const express = require('express');

const app = express();
const PORT = 5000; // should be an env

app.get('/', (req, res) => {
  res.send('Hello World too');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
