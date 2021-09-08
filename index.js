import bodyParser from 'body-parser'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import {createData, getData} from'./mySqlScript.js'

import mysql from 'mysql'

dotenv.config()


const app = express()

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
      console.log('reconnect');
    } else {
      console.log('reconnect err');
      throw err;
    }
  });
}

  app.post('/music_data',async(req,res)=>{
    conn.query(createData("music_data",req.body), function(err, result, fields){
      if(err) throw err;
      res.send('insert success')
      console.log('insert success');
    });
  })

  app.get('/music_data',async(req,res)=>{
    conn.query(getData('music_data',req.query), function(err, result, fields){
      if(err) throw err;
      res.send(result)
      console.log('get success');
    });
  })

  app.put('/music_data',async(req,res)=>{
    conn.query(getData('music_data',req.body.body.data,req.body.query), function(err, result, fields){
      if(err) throw err;
      res.send(result)
      console.log('get success');
    });
  })

  app.listen(process.env.PORT, () => {
    console.log('網頁伺服器已啟動')
    console.log('http://localhost:'+process.env.PORT);
  })



  handleDisconnect()