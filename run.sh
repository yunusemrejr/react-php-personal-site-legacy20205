#!/bin/bash

# Install dependencies
npm install react react-dom react-scripts typescript @types/react @types/react-dom
npm install react-router-dom @types/react-router-dom
npm install --save-dev @types/node

# Create necessary directories if they don't exist
mkdir -p src/components src/pages src/styles

# Create index.html if it doesn't exist
if [ ! -f public/index.html ]; then
  mkdir -p public
  cat > public/index.html << EOL
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Yunus Emre Vurgun - Personal Website" />
    <title>Yunus Emre Vurgun</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
EOL
fi

# Create index.tsx if it doesn't exist
if [ ! -f src/index.tsx ]; then
  cat > src/index.tsx << EOL
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
EOL
fi

# Create basic index.css
if [ ! -f src/styles/index.css ]; then
  cat > src/styles/index.css << EOL
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
EOL
fi

# Install dependencies
npm install
