const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express();

const corsOptions = {
    exposedHeaders: ['x-access-token']
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.post('/infra/log', (req, res) => {
    console.log(req.body);
    res.end();
});

app.listen(7000, () => {
    console.log('Log server is running!');
});