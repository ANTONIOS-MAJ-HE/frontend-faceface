import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const express = require('express');
const path = require('path');
const app = express();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    https: false,
  },
})


const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
