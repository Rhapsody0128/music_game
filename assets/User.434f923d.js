import{r as a,o as t,c as l,a as s,w as d,F as e,l as c,m as o}from"./vendor.e3454a14.js";const r={id:"User"};const u={data:()=>({ready:!1,all_music_data:null}),mounted(){this.axios.get("http://localhost:4000/data").then((a=>{this.all_music_data=a.data,this.all_music_data.forEach((a=>{a.map_data=JSON.parse(a.map_data)})),this.ready=!0})).catch((a=>{console.log(a)}))},render:function(u,i,n,_,m,h){const f=a("el-header"),p=a("music_card"),y=a("el-col"),g=a("el-row"),v=a("el-main");return t(),l("div",r,[s(f),s(v,null,{default:d((()=>[s(g,null,{default:d((()=>[m.ready?(t(!0),l(e,{key:0},c(m.all_music_data,(a=>(t(),l(y,{lg:4,md:8},{default:d((()=>[s(p,{music_data:a},null,8,["music_data"])])),_:2},1024)))),256)):o("",!0)])),_:1})])),_:1})])}};export{u as default};
