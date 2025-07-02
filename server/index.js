const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3001;

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend API is running!' });
});

app.post('/api/join-game', (req, res) => {
  console.log('POST /api/join-game hit! Body:', req.body);
  // For now, just send a success message
  res.json({ success: true, message: 'Joined game successfully!', gameId: 'game_123' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT} (0.0.0.0)`);
});
