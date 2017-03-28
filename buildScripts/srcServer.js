import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000;
const app = express();

//any reference to the root should be handled by the funtion
//declare routing
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if (err){
    console.log(err);
  }else{
    open('http://localhost:'+port);
  }
});
