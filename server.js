const express = require('express');
const cors = require('cors');
const upload = require('./upload');

const server = express();

let corsOptions = {
    origin : '*',
    optionSuccessStatus: 200
};

server.use(cors(corsOptions));

server.get('/', (req, res) => {
    res.send('holaaa');
});
server.post('/upload', upload);

server.listen(3000, () => {
    console.log('server listening at port 3000...');
});


