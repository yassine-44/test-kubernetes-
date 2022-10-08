const express = require('express');
const config = require('config');
const app = express();
const secret = config.get('secret.sensitive');
const configmap = config.get('configmaps.non-sencitive-data');
const port = 3000


app.get('/', (req, res) => {
    res.send('this is the output of the test :');
    res.send('secret:'  , secret);
    res.send('configmaps :' , configmap );


});
const server = app.listen(port, host, (err) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server is running on ${port}`);
});
