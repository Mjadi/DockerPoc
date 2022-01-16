const fs = require('fs');
const mongoose = require('mongoose');
const app = require('express')();
const scheme = require('./help');

mongoose.connect('mongodb://localhost:27017/students', {useNewUrlParser: true});

app.get('/', (req, res) => 
    res.end("Hello World")
);

app.get('/students', (req, res) => {

    scheme.find({}, (err, data) => {
        if(err) {
            res.status(404).json(data);
        }
        
        res.json(data);
    });

});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`));