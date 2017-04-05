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
