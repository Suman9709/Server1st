// // import http from 'http';
// let http = require("http");
// let fs = require("fs");

// let {Buffer} = require("buffer");
// buf=Buffer.from("Hello");
// console.log(buf);


// console.log("starting server");
// http.createServer((req, res) => {
//     // console.log({Headers: req.headers})
//     // res.write('hello suman');
//     // console.log("sending response")
//     // res.end();
//     fs.readFile('response.html', (err, data) => {
//         console.log(req.url);
//         if (!err) {
//             res.writeHead(200, {
//                 "Content-Type": "text/html"
//             });
//             res.write(data);
//             return res.end();
//         }
//         res.write('error while reading file');
//         return res.end();
//     })

// })
//     .listen(6060)

