import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
/* eslint-disable no-console*/
const port = 3000;
const app = express();
const compiler = webpack(config);

//tell express to use webpack-dev-middleware
app.use(require('webpack-dev-middleware')(compiler,{
  noInfo:true,
  publicPath:config.output.publicPath
}));

//any reference to the root should be handled by the function
//declare routing
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

//an end point that returns data
app.get('/users', function(req,res){
  //hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id":1, "firstName":"Jim", "lastName":"Smith", "email":"jimSmith@gmail.com"},
    {"id":2, "firstName":"John", "lastName":"Hood","email":"johnHood@gmail.com"},
    {"id":3, "firstName":"Lily","lastName":"White","email":"lilyWhite@gmail.com"}
  ]);
});

app.listen(port, function(err){
  if (err){
    console.log(err);
  }else{
    open('http://localhost:'+port);
  }
});
