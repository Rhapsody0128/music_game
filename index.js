import bodyParser from 'body-parser'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import {createData} from'./mySqlScript.js'

import mysql from 'mysql'

dotenv.config()


const app = express()

app.use(bodyParser.json()); // support json encoded bodies
app.use(express.static('public'))
app.use(express.static('files'))

app.use(cors({
  origin (origin, callback) {
    // 直接開網頁，不是 ajax 時，origin 是 undefined
    if (origin === undefined) {
      callback(null, true)
    } else {
      console.log(process.env.ALLOW_CORS)
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


var conn

function handleDisconnect() {
  conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database:process.env.DB_DATEBASE,
  });  
  conn.connect( function onConnect(err) {   
    if (err) { 
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 10000);
    }
  });
  conn.on('error', function onError(err) {
    console.log('db error', err);
    if (err.code == 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect(); 
    } else {
      throw err;
    }
  });
}

  // 其他的資料庫操作，位置預留
  // 關閉連線時呼叫


  // // 增
  // conn.query("INSERT INTO `user` SET `username`='rhapsody', `password`='830128', `email`='rhapsody0128@gmail.com'", function(err, result){
  //   if(err) throw err;
  //   console.log(result);
  //   });

  //   // 改
  // conn.query('UPDATE `user` SET `password`="123456" WHERE `username`="qwerty"', function(err, result){
  //   if(err) throw err;
  //   console.log(result);
  //   });
  //   // 刪
  // conn.query('DELETE FROM `user` WHERE `username`="rhapsody"', function(err, result, fields){
  //   if(err) throw err;
  //   console.log(result);
  //   });
  //   // 查
  // conn.query('SELECT * FROM `user`', function(err, result, fields){
  //   if(err) throw err;
  //   console.log(result);
  //   });
  //   console.log( 'select ended!' );

// createData('music_data',req.body)

  app.post('/data',async(req,res)=>{
    conn.query(createData(req.body[0],req.body[1]), function(err, result, fields){
      if(err) throw err;
      res.send('insert success')
      console.log('success');
    });
  })

  app.post('/',async(req,res)=>{
    console.log('sussess');
  })

  app.get('/data',async(req,res)=>{
    conn.query('select * from music_data', function(err, result, fields){
      if(err) throw err;
      console.log(result);
      res.send(result)
      console.log('success');
    });
  })

  app.listen(process.env.PORT, () => {
    console.log('網頁伺服器已啟動')
    console.log('http://localhost:'+process.env.PORT);
  })



  handleDisconnect()