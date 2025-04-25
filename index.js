const express = require('express');
const app = express();
const port = process.env.PORT || 5050;
const path = require('path');
const fs = require('fs');
const cors = require('cors');

app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello Dev');
});

app.get('/api/banners', (req, res) => {
  const dataPath = path.join(__dirname, 'data', 'banner.json');

  fs.readFile(dataPath, 'utf8', (err, jsonData) => {
    if (err) {
      console.error('Error reading banners.json:', err);
      return res.status(500).json({ error: 'Unable to read banners data' });
    }

    try {
      const banners = JSON.parse(jsonData);
      res.json(banners);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      res.status(500).json({ error: 'Invalid JSON format' });
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
