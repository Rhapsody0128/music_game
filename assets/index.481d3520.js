import{r as e,o as t,c as a,a as s,w as i,b as o,d as l,e as r,f as n,g as d,p as c,h as m,i as p,j as u,k as h,t as y,F as g,l as b,m as v,n as f,q as k,V as S,s as D,u as T,v as _}from"./vendor.d1e35357.js";const w={id:"App"},C={id:"Nav"},B=o("Home"),P=o("Edit"),E=o("Play");const M={};let L;M.render=function(o,l){const r=e("el-menu-item"),n=e("el-menu"),d=e("router-view");return t(),a("div",w,[s("div",C,[s(n,{class:"el-menu-demo",mode:"horizontal",router:!0},{default:i((()=>[s(r,{index:"/"},{default:i((()=>[B])),_:1}),s(r,{index:"edit"},{default:i((()=>[P])),_:1}),s(r,{index:"play"},{default:i((()=>[E])),_:1})])),_:1})]),s(d)])};const j={},V=function(e,t){if(!t||0===t.length)return e();if(void 0===L){const e=document.createElement("link").relList;L=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`./${e}`)in j)return;j[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":L,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))},I=[{path:"/",name:"Home",component:()=>V((()=>import("./Home.2b2219e1.js")),["assets/Home.2b2219e1.js","assets/vendor.d1e35357.js"])},{path:"/edit",name:"Edit",component:()=>V((()=>import("./Edit.5f7617b2.js")),["assets/Edit.5f7617b2.js","assets/Edit.3ea25df2.css","assets/vendor.d1e35357.js"])},{path:"/play",name:"Play",component:()=>V((()=>import("./Play.1a813f92.js")),["assets/Play.1a813f92.js","assets/Play.d0d66fce.css","assets/vendor.d1e35357.js"])}],x=l({history:r("#"),routes:I});var $=n({state:{setting:{bpm:1,viewDegree:15,mapSetting:[{key:"a",color:"red",timeStamp:[]},{key:"s",color:"orange",timeStamp:[]},{key:"d",color:"yellow",timeStamp:[]},{key:"f",color:"green",timeStamp:[]},{key:"4",color:"blue",timeStamp:[]},{key:"5",color:"purple",timeStamp:[]},{key:"6",color:"black",timeStamp:[]}]},mapData:[{key:"a",color:"red",timeStamp:[]},{key:"s",color:"orange",timeStamp:[]},{key:"d",color:"yellow",timeStamp:[]},{key:"f",color:"green",timeStamp:[]},{key:"4",timeStamp:[],color:"blue"},{key:"5",color:"purple",timeStamp:[]},{key:"6",color:"black",timeStamp:[]}]},getters:{getMapData:e=>e.mapData,getBpm:e=>e.setting.bpm,getViewDegree:e=>e.setting.viewDegree},mutations:{saveMapData(e,t){e.mapData=t},setBpm(e,t){e.setting.bpm=t}},actions:{},modules:{},plugins:[d()]});const R=p("data-v-db0cbfe0");c("data-v-db0cbfe0");const A=s("div",{class:"image"},[s("img",{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"})],-1),N=s("h1",null,"S",-1),O=o("sdasdads"),z=o("ASD"),H=o("ASD"),U=o("SS"),q=o("7"),Q=o("4:33"),X=o("60%"),Y=o("1560");m();const F=R(((i,o,l,r,n,d)=>{const c=e("el-descriptions-item"),m=e("el-descriptions"),p=e("el-card");return t(),a(p,{class:"music_card",shadow:"hover","body-style":{padding:"0px"}},{default:R((()=>[A,s(m,{class:"info",title:"歌曲名稱",column:1},{extra:R((()=>[N])),default:R((()=>[s(c,{label:"作者"},{default:R((()=>[O])),_:1}),s(c,{label:"原曲"},{default:R((()=>[z])),_:1}),s(c,{label:"原曲頻道"},{default:R((()=>[H])),_:1}),s(c,{label:"難度"},{default:R((()=>[U])),_:1}),s(c,{label:"鍵位"},{default:R((()=>[q])),_:1}),s(c,{label:"長度"},{default:R((()=>[Q])),_:1}),s(c,{label:"滿意度"},{default:R((()=>[X])),_:1}),s(c,{label:"遊玩數"},{default:R((()=>[Y])),_:1})])),_:1})])),_:1})}));const W={data:()=>({aa:"asd"})};W.render=F,W.__scopeId="data-v-db0cbfe0";const G=p("data-v-b3a89f60");c("data-v-b3a89f60");const J={id:"playboard"},K={class:"toolBar"},Z=o("Play"),ee=o("Pause"),te={class:"player"},ae=s("div",{id:"player"},null,-1),se={class:"full-screen"};m();const ie=G(((i,l,r,n,d,c)=>{const m=e("el-slider"),p=e("el-button"),v=e("game_slider"),f=u("loading");return t(),a("div",J,[h(s("div",K,[s(m,{class:"slider",modelValue:d.viewDegree,"onUpdate:modelValue":l[1]||(l[1]=e=>d.viewDegree=e),vertical:"",height:"10vh",max:80},null,8,["modelValue"]),s(p,{onClick:l[2]||(l[2]=e=>c.gameStart()),icon:"el-icon-video-play",round:"",type:"primary",disabled:1==d.playerState},{default:G((()=>[Z])),_:1},8,["disabled"]),s(p,{onClick:l[3]||(l[3]=e=>c.gamePause()),icon:"el-icon-video-pause",round:"",type:"success",disabled:1!=d.playerState},{default:G((()=>[ee])),_:1},8,["disabled"]),s("p",null,y(d.score),1)],512),[[f,d.loading]]),s("div",{class:"row",style:c.playBoardStyle()},[h(s("div",te,[ae],512),[[f,d.loading]]),(t(!0),a(g,null,b(c.getMapData,((e,i)=>(t(),a("div",se,[s("div",{class:"screen",id:"S"+e.key},[(t(!0),a(g,null,b(e.timeStamp,((s,i)=>(t(),a(v,{onClick:l[4]||(l[4]=e=>c.destroy()),class:e.key,color:e.color,bornTime:s,currentTime:d.currentTime,bpm:c.getBpm},null,8,["class","color","bornTime","currentTime","bpm"])))),256))],8,["id"]),s(p,{class:"button shadow",style:c.getButtonStyle(e.color),size:"medium",onClick:t=>c.hit(e.key,e.color),id:"B"+e.key},{default:G((()=>[o(y(e.key),1)])),_:2},1032,["style","onClick","id"])])))),256))],4)])}));const oe={props:{musicData:Object},data:()=>({loading:!0,viewDegree:0,currentTime:null,choiceTime:null,player:null,score:0,combo:0,maxCombo:0,lifeTimer:null,playerState:0}),computed:{getMapData(){return this.$store.getters.getMapData},getBpm(){return this.$store.getters.getBpm},getviewDegree(){return this.$store.getters.getviewDegree},judgeLine(){return 1===this.getBpm?[80,79,82,75,85,70]:1.5===this.getBpm?[80.5,78.5,83,74,85,68]:2===this.getBpm?[81,78,84,73,89,66]:.5===this.getBpm?[79.8,79.2,82,76,84,72]:.25===this.getBpm?[79.6,79.4,81,78,83,75]:void 0}},methods:{gameStart(){this.player.playVideo(),this.currentTime=this.player.getCurrentTime(),this.lifeTimer=setInterval((()=>{1===this.playerState&&(this.currentTime+=.015)}),15)},gamePause(){2!==this.playerState&&(this.player.pauseVideo(),this.currentTime=this.player.getCurrentTime(),console.log("pase"+this.currentTime),clearInterval(this.lifeTimer))},playBoardStyle(){return{transform:`\n        rotateX(${this.viewDegree}deg)\n        scale(${1-this.viewDegree/170})`}},getButtonStyle:e=>({background:e}),hit(e,t){const a=document.getElementsByClassName(e);a.length>0&&(this.appendEffect(e,a[0].style.top,t),a[0].click())},judge(e){var t=parseInt(e),a="";return this.judgeLine[0]>=t&&t>=this.judgeLine[1]?(this.score+=100,this.combo++,a="perfect"):this.judgeLine[2]>=t&&t>=this.judgeLine[0]||this.judgeLine[1]>=t&&t>=this.judgeLine[3]?(this.score+=30,this.combo++,a="excellent"):this.judgeLine[4]>=t&&t>=this.judgeLine[2]||this.judgeLine[3]>=t&&t>=this.judgeLine[5]?(this.score+=10,this.combo++,a="good"):(this.combo=0,a="miss"),this.combo>10&&this.combo<=30?this.score+=5:this.combo>30&&this.combo<=50?this.score+=10:this.combo>50&&this.combo<=100?this.score+=25:this.combo>100&&this.combo<=200?this.score+=35:this.combo>200&&(this.score+=50),this.combo>this.maxCombo&&(this.maxCombo=this.combo),a},appendEffect(e,t,a){const s=document.getElementById("S"+e),i=document.createElement("div");i.appendChild(document.createTextNode(`${this.judge(t)}`)),s.appendChild(i),i.classList.add("effect"),i.style.top=t,i.style.background=a},destroy(){this.$emit("destroy")},onPlayerReady(e){this.loading=!1,this.player.setPlaybackQuality("medium")},onPlayerStateChange(e){this.playerState=e.data,console.log(this.playerState)}},mounted(){this.viewDegree=this.getViewDegree,this.player=new YT.Player("player",{videoId:this.musicData.id,width:"100%",height:"100%",playerVars:{loop:1,rel:0},events:{onReady:this.onPlayerReady,onStateChange:this.onPlayerStateChange}})},created(){const e=this;document.onkeydown=function(t){e.musicData.mapData.map((e=>{if(e.key===t.key){const t=document.getElementById("B"+e.key);t.click(),t.classList.add("show"),setTimeout((()=>{t.classList.remove("show")}),300)}}))}}};oe.render=ie,oe.__scopeId="data-v-b3a89f60";const le=p("data-v-c3dc0ec0");c("data-v-c3dc0ec0");const re={id:"editboard"},ne={class:"toolBar"},de=o("Play"),ce=o("Pause"),me=o("Save"),pe={class:"player"},ue={id:"player"},he={class:"full-screen"};m();const ye=le(((i,l,r,n,d,c)=>{const m=e("el-slider"),p=e("el-button"),v=u("loading");return t(),a("div",re,[h(s("div",ne,[s(m,{class:"slider",modelValue:d.viewDegree,"onUpdate:modelValue":l[1]||(l[1]=e=>d.viewDegree=e),vertical:"",height:"10vh",max:80},null,8,["modelValue"]),s(p,{onClick:l[2]||(l[2]=e=>c.gameStart()),icon:"el-icon-video-play",round:"",type:"primary",disabled:1==d.playerState},{default:le((()=>[de])),_:1},8,["disabled"]),s(p,{onClick:l[3]||(l[3]=e=>c.gamePause()),icon:"el-icon-video-pause",round:"",type:"success",disabled:1!=d.playerState},{default:le((()=>[ce])),_:1},8,["disabled"]),s(p,{onClick:l[4]||(l[4]=e=>c.saveMapData()),plain:"",icon:"el-icon-finished",round:"",type:"warning"},{default:le((()=>[me])),_:1})],512),[[v,d.loading]]),s(m,{modelValue:d.currentTime,"onUpdate:modelValue":l[5]||(l[5]=e=>d.currentTime=e),height:"300",max:r.musicData.duration,"show-input":"",onInput:l[6]||(l[6]=e=>c.seekTo()),onChange:l[7]||(l[7]=e=>c.seekToConfirm())},null,8,["modelValue","max"]),s("div",{class:"row",style:c.playBoardStyle()},[s("div",pe,[h(s("div",ue,null,512),[[v,d.loading]])]),(t(!0),a(g,null,b(c.getMapData,((e,i)=>(t(),a("div",he,[s("div",{class:"screen",id:"S"+e.key},null,8,["id"]),s(p,{class:"button shadow",style:c.getButtonStyle(e.color),size:"medium",onClick:t=>c.hit(e.key,e.color),id:"B"+e.key},{default:le((()=>[o(y(e.key),1)])),_:2},1032,["style","onClick","id"])])))),256))],4)])}));const ge={props:{musicData:Object},data:()=>({loading:!0,viewDegree:0,currentTime:null,choiceTime:null,player:null,score:0,combo:0,lifeTimer:null,playerState:0,newMap:[]}),computed:{getMapData(){return this.$store.getters.getMapData},getviewDegree(){return this.$store.getters.getviewDegree}},methods:{gameStart(){console.log(this.player),this.player.playVideo(),this.lifeTimer=setInterval((()=>{1===this.playerState&&(this.currentTime+=.05)}),50)},gamePause(){this.player.pauseVideo(),clearInterval(this.lifeTimer)},playBoardStyle(){return{transform:`\n        rotateX(${this.viewDegree}deg)\n        scale(${1-this.viewDegree/170})`}},getButtonStyle:e=>({background:e}),hit(e,t){1===this.playerState&&(this.appendEffect(e,t),this.judge(),this.editMap(e,this.player.getCurrentTime()))},editMap(e,t){this.getAMapData(e).timeStamp.push(t)},getAMapData(e){return this.newMap.find((t=>t.key===e))},initMap(){this.getMapData.map((e=>{var t={key:e.key,color:e.color,timeStamp:[]};this.newMap.push(t)}))},saveMapData(){this.newMap.forEach((e=>{e.timeStamp.sort()})),this.$store.commit("saveMapData",this.newMap),this.$notify({title:"Map Data",message:v("i",{style:"color: teal"},"已儲存資料")})},judge(){this.score+=100,this.combo++,this.combo>10&&this.combo<=30?this.score+=5:this.combo>30&&this.combo<=50?this.score+=10:this.combo>50&&this.combo<=100?this.score+=25:this.combo>100&&this.combo<=200?this.score+=35:this.combo>200&&(this.score+=50)},appendEffect(e,t){const a=document.getElementById("S"+e),s=document.createElement("div");s.appendChild(document.createTextNode("perfect")),s.classList.add("effect"),s.style.top="80%",s.style.background=t,a.appendChild(s)},seekTo(){1!==this.playerState&&this.player.seekTo(this.currentTime)},seekToConfirm(){this.player.seekTo(this.currentTime)},onPlayerReady(e){this.loading=!1,this.player.setPlaybackQuality("medium")},onPlayerStateChange(e){this.playerState=e.data}},mounted(){this.player=new YT.Player("player",{videoId:this.musicData.id,width:"100%",height:"100%",playerVars:{loop:1,rel:0},events:{onReady:this.onPlayerReady,onStateChange:this.onPlayerStateChange}}),this.initMap()},created(){const e=this;document.onkeydown=function(t){e.musicData.mapData.map((e=>{if(e.key===t.key){const t=document.getElementById("B"+e.key);t.click(),t.classList.add("show"),setTimeout((()=>{t.classList.remove("show")}),300)}}))}}};ge.render=ye,ge.__scopeId="data-v-c3dc0ec0";const be=p("data-v-19c2fdd9")(((e,s,i,o,l,r)=>r.exist?(t(),a("div",{key:0,class:"game_slider",style:r.gameSliderStyle,onClick:s[1]||(s[1]=e=>r.destroy())},null,4)):f("",!0)));const ve={data:()=>({break:!1}),props:{bpm:Number,color:String,bornTime:Number,currentTime:Number},computed:{gameSliderStyle(){return{top:this.top+"%",background:this.color}},top(){return this.sneak-this.bornTime>0?75*(this.sneak-this.bornTime)*this.bpm:0},sneak(){return 1===this.bpm?this.currentTime+1.15:1.5===this.bpm?this.currentTime+.83:2===this.bpm?this.currentTime+.56:.5===this.bpm?this.currentTime+2.1:.25===this.bpm?this.currentTime+4.35:void 0},exist(){return this.top>0&&this.top<100&&!1===this.break}},methods:{destroy(){this.break=!0}}};ve.render=be,ve.__scopeId="data-v-19c2fdd9";const fe=k(M);fe.use(x),fe.use($),fe.use(S),fe.use(D),fe.use(T,_),fe.component("music_card",W),fe.component("playboard",oe),fe.component("editboard",ge),fe.component("game_slider",ve),fe.mount("#app");
