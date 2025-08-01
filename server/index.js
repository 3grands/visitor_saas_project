const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));