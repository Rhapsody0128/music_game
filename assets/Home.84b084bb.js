import{r as a,o as s,c as t,a as e,w as l,F as d,m as o}from"./vendor.98648e79.js";const c={id:"Home"};const m={data:()=>({ready:!1,all_music_data:{}}),mounted(){this.axios.get("https://music-game-rhapsody.herokuapp.com/music_data").then((a=>{this.all_music_data=a.data,this.all_music_data.forEach((a=>{a.map_data=JSON.parse(a.map_data)})),this.ready=!0})).catch((a=>{console.log(a)}))},render:function(m,i,r,u,n,_){const h=a("el-header"),p=a("music_card"),f=a("el-col"),y=a("el-skeleton"),g=a("el-row"),k=a("el-main");return s(),t("div",c,[e(h),e(k,null,{default:l((()=>[e(g,null,{default:l((()=>[n.ready?(s(!0),t(d,{key:0},o(n.all_music_data,(a=>(s(),t(f,{lg:4,md:8},{default:l((()=>[e(p,{music_data:a},null,8,["music_data"])])),_:2},1024)))),256)):(s(),t(y,{key:1,class:"marginTop",rows:12,animated:""}))])),_:1})])),_:1})])}};export{m as default};
