import{r as a,o as t,c as l,a as s,w as d,F as e,l as c,k as u}from"./vendor.21c96ccb.js";const _={id:"Home"};const i={data:()=>({ready:!1,all_music_data:null}),mounted(){this.axios.get({}.VITE_BACK_URL+"/music_data").then((a=>{this.all_music_data=a.data,this.all_music_data.forEach((a=>{a.map_data=JSON.parse(a.map_data)})),this.ready=!0})).catch((a=>{console.log(a)}))},render:function(i,o,r,m,n,h){const f=a("el-header"),p=a("music_card"),y=a("el-col"),g=a("el-row"),k=a("el-main");return t(),l("div",_,[s(f),s(k,null,{default:d((()=>[s(g,null,{default:d((()=>[n.ready?(t(!0),l(e,{key:0},c(n.all_music_data,(a=>(t(),l(y,{lg:4,md:8},{default:d((()=>[s(p,{music_data:a},null,8,["music_data"])])),_:2},1024)))),256)):u("",!0)])),_:1})])),_:1})])}};export{i as default};
