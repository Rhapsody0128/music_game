import{p as a,i as t,r as s,o as e,c as d,a as o,k as r}from"./vendor.98648e79.js";const i=r();a("data-v-3f0a3b67");const c={id:"Play"};t();const m=i(((a,t,r,m,u,l)=>{const n=s("el-header"),p=s("playboard"),h=s("el-col"),_=s("el-row"),y=s("el-skeleton");return e(),d("div",c,[o(n),u.ready?(e(),d(_,{key:0,justify:"center"},{default:i((()=>[o(h,{xl:16,lg:20,md:24},{default:i((()=>[o(p,{music_data:u.music_data},null,8,["music_data"])])),_:1})])),_:1})):(e(),d(y,{key:1,class:"marginTop",rows:12,animated:""}))])}));const u={data:()=>({ready:!1,music_data:{}}),methods:{},computed:{},mounted(){this.ready=!1,this.axios.get("https://music-game-rhapsody.herokuapp.com/music_data",{params:{id:this.$route.query.id}}).then((a=>{this.music_data=a.data[0],this.music_data.map_data=JSON.parse(a.data[0].map_data),this.ready=!0})).catch((a=>{console.log(a)}))}};u.render=m,u.__scopeId="data-v-3f0a3b67";export{u as default};