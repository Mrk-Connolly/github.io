const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname)));

// Example: API route (test endpoint)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js backend!' });
});

// Fallback to index.html for SPA or direct links
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
