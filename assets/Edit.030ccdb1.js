import{p as a,g as t,r as o,o as e,c as l,a as c,h as s,b as d}from"./vendor.edb56429.js";const i=s();a("data-v-709e0eca");const r={id:"Edit"},m=d("save"),n=d("get");t();const u=i(((a,t,s,d,u,p)=>{const g=o("el-button"),_=o("el-header"),h=o("editboard"),b=o("el-col"),v=o("el-row");return e(),l("div",r,[c(_,null,{default:i((()=>[c(g,{onClick:t[1]||(t[1]=a=>p.save())},{default:i((()=>[m])),_:1}),c(g,{onClick:t[2]||(t[2]=a=>p.get())},{default:i((()=>[n])),_:1})])),_:1}),c(v,{justify:"center"},{default:i((()=>[c(b,{xl:16,lg:20,md:24},{default:i((()=>[c(h,{music_data:u.musicData},null,8,["music_data"])])),_:1})])),_:1})])}));const p={data:()=>({musicData:{title:"a",mapper:"z",bpm:1,duration:200,difficulty:1.5,origin_song:"f",youtube_id:"VyvhvlYvRnc",video_url:"a",img_src:"c",producer:"d",love_count:0,play_count:0,view_count:0,map_data:[{key:"A",color:"rgb(200,10,15)",timeStamp:[.3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]},{key:"s",color:"rgb(0,10,15)",timeStamp:[.3,.8,.9,1.2,1.45]},{key:"d",color:"rgba(0,0,0,0.5)",timeStamp:[.3,.8,.9,1.2,1.45]},{key:"f",color:"rgba(255,255,255,1)",timeStamp:[.3,.8,.9,1.2,1.45]},{key:"4",color:"rgba(200,10,10,0.5)",timeStamp:[.3,.8,.9,1.2,1.45]},{key:"5",color:"rgba(200,200,10,0.5)",timeStamp:[.3,.8,.9,1.2,1.45]},{key:"6",color:"rgba(200,200,200,0.5)",timeStamp:[.3,.8,.9,1.2,1.45,.3,.8,.9,1.2,1.45]}]}}),methods:{save(){this.axios.post("http://localhost:4000/data",["music_data",this.musicData]).then((a=>{console.log(a.data)})).catch((a=>{console.log(a)}))},get(){this.axios.get("http://localhost:4000/get").then((a=>{console.log(a),console.log(a.data[0]),JSON.parse(a.data[0].map_data),console.log(JSON.parse(a.data[0].map_data))})).catch((a=>{console.log(a)}))}}};p.render=u,p.__scopeId="data-v-709e0eca";export{p as default};
