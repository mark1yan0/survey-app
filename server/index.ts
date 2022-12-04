require('dotenv').config();
// const express = require('express');
import express from 'express';
// const { Espress, Request, Response } = express
// const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000; // should be an env

// await mongoose.connect(process.env.MONGODB_URI);

app.get('/', (req, res) => {
  res.send('Hello World typescript');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
