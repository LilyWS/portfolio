const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));

app.get(('/contact'), (req, res) => {
    res.sendFile(path.join(__dirname, "/public/contact.html"));
});

// app.get(('/projects'), (req, res) => {
//     res.sendFile(path.join(__dirname, "/public/projects.html"));
// });

app.get(('/*'), (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(PORT, () => console.log('Now listening'));