const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Redirect root path "/" to "/index"
app.get('/', (req, res) => {
  res.redirect('/index');
});

// Serve static files from the build directory
app.use('/index', express.static(path.join(__dirname, 'build')));

// Serve index.html for any unknown routes (React Router)
app.get('/index/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
