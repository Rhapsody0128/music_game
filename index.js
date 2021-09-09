import bodyParser from 'body-parser'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import {createData, getData,updateData,deleteData} from'./mySqlScript.js'

import mysql from 'mysql'

dotenv.config()


const app = express()

app.use(express.static('public'))
app.use(express.static('files'))
app.use(bodyParser.json())

app.use(cors({
  origin (origin, callback) {
    // 直接開網頁，不是 ajax 時，origin 是 undefined
    if (origin === undefined) {
      callback(null, true)
    } else {
      if (process.env.ALLOW_CORS === 'true') {
        // 開發環境，允許
        callback(null, true)
      } else if (origin.includes('github')) {
        // 非開發環境，但是從 github 過來，允許
        callback(null, true)
      } else {
        // 不是開發也不是從 github 過來，拒絕
        callback(new Error('Not allowed'), false)
      }
    }
  },
  credentials: true
}))



var conn = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database:process.env.DB_DATEBASE,
  connectionLimit : 10, // 可以自己設定
});

var query = function(sql, options, callback) {
  console.log(sql, options, callback);
  if (typeof options === "function") {
      callback = options;
      options = undefined;
  }
  pool.getConnection(function(err, conn){
      if (err) {
          callback(err, null, null);
      } else {
          conn.query(sql, options, function(err, results, fields){
              // callback
              callback(err, results, fields);
          });
          // release connection。
          // 要注意的是，connection 的釋放需要在此 release，而不能在 callback 中 release
          conn.release();
      }
  });
};

  app.post('/music_data',async(req,res)=>{
    try {
      conn.query(createData("music_data",req.body), function(err, result, fields){
        res.send('insert success')
        console.log('insert success');
      });
    } catch (error) {
      console.log(error);
    }
  })

  app.get('/music_data',async(req,res)=>{
    try {
      conn.query(getData('music_data',req.query), function(err, result, fields){
        res.send(result)
        console.log('get success');
      });
      
    } catch (error) {
      console.log(error);
    }
  })

  app.patch('/music_data',async(req,res)=>{
    try {
      conn.query(updateData('music_data',req.body.data,req.body.query), function(err, result, fields){
        res.send(result)
        console.log('patch success');
      });
    } catch (error) {
      console.log(error);
    }
  })
  
  app.delete('/music_data',async(req,res)=>{
    try {
      console.log(req);
      conn.query(deleteData('music_data',req.query), function(err, result, fields){
        res.send(result)
        console.log('delete success');
      });
      
    } catch (error) {
      console.log(error);
    }
  })

  app.get('/users',async(req,res)=>{
    try {
      conn.query(getData('users',req.query), function(err, result, fields){
        res.send(result)
        console.log('get success');
      });
      
    } catch (error) {
      console.log(error);
    }
  })

  app.post('/users',async(req,res)=>{
    try {
      console.log(req.body);
      conn.query(createData("users",req.body), function(err, result, fields){
        res.send('insert success')
        console.log('insert success');
      });
    } catch (error) {
      console.log(error);
    }
  })

  app.listen(process.env.PORT, () => {
    console.log('網頁伺服器已啟動')
    console.log('http://localhost:'+process.env.PORT);
  })

  export default query