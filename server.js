const http = require('http');
const fs = require('fs');
const path = require('path');
const root = __dirname;
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.json':'application/json'};
http.createServer((req,res)=>{let pathname=decodeURIComponent((req.url||'/').split('?')[0]);let file=path.join(root, pathname==='/'?'index.html':pathname.replace(/^\\/+/,''));if(!file.startsWith(root)){res.writeHead(403);return res.end('Forbidden');}fs.readFile(file,(err,data)=>{if(err){fs.readFile(path.join(root,'index.html'),(e,d)=>{if(e){res.writeHead(404);res.end('Not found')}else{res.writeHead(200,{'Content-Type':mime['.html']});res.end(d)}})}else{res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream'});res.end(data)}})}).listen(process.env.PORT||3000,'0.0.0.0',()=>console.log('Crafix is running'));
