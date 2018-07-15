process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require('cluster');

// console.log(cluster.isMaster); true for inital

//is the file being executed in master mode?
if(cluster.isMaster){
    //cause index.js to be excuted *again* but in child mode
    cluster.fork();
    // cluster.fork();
    // cluster.fork();
    // cluster.fork();
}else{
    // I am a child. I am going to act like a server and do nothing else
    const express = require('express');
    const crypto = require('crypto');
    const app = express();
    // function doWork(duration){
    //   const start = Date.now();
    //   while ( Date.now() - start < duration ){}
    // }

    //this is to add in replacment of dowork make actual use of computation

    app.get('/', (req, res) => {
      // doWork(5000);
      crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        res.send('hi there');
      });
    });

    app.get('/fast', (req, res) => {
      res.send('this was fast');
    });

    app.listen(3000);
}
