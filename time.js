// Import fs
const fs = require('fs');

// Get current time
const time = new Date().toLocaleString();

// Save time to file
fs.writeFileSync('time.txt', time);
