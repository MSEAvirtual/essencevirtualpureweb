const express = require('express');
const dd = require('dotenv');
const app = express();
const path = require('path');
const DIR= 'build';
var compression = require('compression')
app.use(compression());
dd.config();
const PORT = process.env.PORT || 5001;

app.use(express.static(DIR));

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, DIR, '/index.html'));
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}!`));