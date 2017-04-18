import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression'

/* eslint-disable no-console*/
const port = 3000;
const app = express();

//enable Gzip compression in express
app.use(compression());

//serve static files in the dist directory
app.use(express.static('dist'));

//any reference to the root should be handled by the function
//declare routing
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err){
  if (err){
    console.log(err);
  }else{
    open('http://localhost:'+port);
  }
});
