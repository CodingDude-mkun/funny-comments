const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend API is running!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
