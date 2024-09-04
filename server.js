const exp = require('express');
const app = exp();

const http = require('http');

const server = http.Server(app);
app.use(exp.urlencoded({extended: false}));

app.use(exp.json());

require('./db')();

server.listen(8000,()=>{
    console.log('port is running' )
})