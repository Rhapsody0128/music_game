import{r as e,o as t,c as a,a as i,w as o,b as s,d as r,e as c,f as n,g as d,p as l,h as m,i as u,t as p,j as h,k as y,l as g,F as k,m as _,n as f,V as b,q as w,s as S,u as v}from"./vendor.8af99e7b.js";const T={id:"App"},D={id:"Nav"},E=s("Home"),C=s("Edit"),L=s("Play"),V=s("Form"),P=s("User"),x=s("Login");const B={data:()=>({name:""}),methods:{async login(){var e=this;window.gapi.load("auth2"),await window.gapi.auth2.init({clientId:{}.VITE_GOOGLE_CLIENT_ID}),await window.gapi.auth2.getAuthInstance().signIn().then((async function(t){console.log(t),e.name=t.Ts.Me,console.log("Sign-in successful")}),(function(e){console.log("Error signing in",e)})),this.$store.commit("login",e.name),window.gapi.auth2.getAuthInstance().disconnect()},logout(){this.confirmLogout=!1,this.$store.commit("logout")}}};let I;B.render=function(s,r,c,n,d,l){const m=e("el-menu-item"),u=e("el-menu"),p=e("router-view");return t(),a("div",T,[i("div",D,[i(u,{class:"el-menu-demo",mode:"horizontal",router:!0},{default:o((()=>[i(m,{index:"/"},{default:o((()=>[E])),_:1}),i(m,{index:"edit"},{default:o((()=>[C])),_:1}),i(m,{index:"play"},{default:o((()=>[L])),_:1}),i(m,{index:"form"},{default:o((()=>[V])),_:1}),i(m,{index:"user"},{default:o((()=>[P])),_:1}),i(m,{onClick:r[1]||(r[1]=e=>l.login())},{default:o((()=>[x])),_:1})])),_:1})]),i(p)])};const j={},$=function(e,t){if(!t||0===t.length)return e();if(void 0===I){const e=document.createElement("link").relList;I=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`./${e}`)in j)return;j[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const i=document.createElement("link");return i.rel=t?"stylesheet":I,t||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),t?new Promise(((e,t)=>{i.addEventListener("load",e),i.addEventListener("error",t)})):void 0}))).then((()=>e()))},M=[{path:"/",name:"Home",component:()=>$((()=>import("./Home.85ba6241.js")),["assets/Home.85ba6241.js","assets/vendor.8af99e7b.js"])},{path:"/edit",name:"Edit",component:()=>$((()=>import("./Edit.c8e59c04.js")),["assets/Edit.c8e59c04.js","assets/Edit.878d3fd0.css","assets/vendor.8af99e7b.js"])},{path:"/play",name:"Play",component:()=>$((()=>import("./Play.1333650e.js")),["assets/Play.1333650e.js","assets/Play.f388df0a.css","assets/vendor.8af99e7b.js"])},{path:"/form",name:"Form",component:()=>$((()=>import("./Form.f5ce2c0d.js")),["assets/Form.f5ce2c0d.js","assets/Form.3474aeeb.css","assets/vendor.8af99e7b.js"])},{path:"/user",name:"User",component:()=>$((()=>import("./User.0b17823b.js")),["assets/User.0b17823b.js","assets/vendor.8af99e7b.js"])}],O=r({history:c("#"),routes:M});var R=n({state:{user:{name:"GM",id:0},setting:{volum:.5,bpm:1,viewDegree:15,mapSetting:[[{key:"a",color:"#cd004b",audio:"cracker",timeStamp:[]}],[{key:"a",color:"#cd004b",audio:"cracker",timeStamp:[]},{key:"d",color:"#fcb711",audio:"cracker",timeStamp:[]}],[{key:"a",color:"#cd004b",audio:"cracker",timeStamp:[]},{key:"s",color:"#f37023",audio:"cracker",timeStamp:[]},{key:"d",color:"#fcb711",audio:"cracker",timeStamp:[]}],[{key:"a",color:"#cd004b",audio:"cracker",timeStamp:[]},{key:"s",color:"#f37023",audio:"cracker",timeStamp:[]},{key:"5",color:"#6561ac",audio:"cracker",timeStamp:[]},{key:"6",color:"#292526",audio:"cracker",timeStamp:[]}],[{key:"a",color:"#cd004b",audio:"cracker",timeStamp:[]},{key:"s",color:"#f37023",audio:"cracker",timeStamp:[]},{key:"4",color:"#0087d2",audio:"cracker",timeStamp:[]},{key:"5",color:"#6561ac",audio:"cracker",timeStamp:[]},{key:"6",color:"#292526",audio:"cracker",timeStamp:[]}],[{key:"a",color:"#cd004b",audio:"cracker",timeStamp:[]},{key:"s",color:"#f37023",audio:"cracker",timeStamp:[]},{key:"d",color:"#fcb711",audio:"cracker",timeStamp:[]},{key:"4",color:"#0087d2",audio:"cracker",timeStamp:[]},{key:"5",color:"#6561ac",audio:"cracker",timeStamp:[]},{key:"6",color:"#292526",audio:"cracker",timeStamp:[]}],[{key:"a",color:"#cd004b",audio:"cracker",timeStamp:[]},{key:"s",color:"#f37023",audio:"cracker",timeStamp:[]},{key:"d",color:"#fcb711",audio:"cracker",timeStamp:[]},{key:"f",color:"#0eb24e",audio:"cracker",timeStamp:[]},{key:"4",color:"#0087d2",audio:"cracker",timeStamp:[]},{key:"5",color:"#6561ac",audio:"cracker",timeStamp:[]},{key:"6",color:"#292526",audio:"cracker",timeStamp:[]}]]},edit_music:[]},getters:{getEditMusic:e=>e.edit_music,getBpm:e=>e.setting.bpm,getViewDegree:e=>e.setting.viewDegree,getMapSetting:e=>e.setting.mapSetting,getVolum:e=>e.setting.volum,getUser:e=>e.user},mutations:{saveEditMusic(e,t){void 0===e.edit_music.find((e=>e.id===t.id))&&e.edit_music.push(t)},clearEditMusic(e,t){let a=e.edit_music.find((e=>e.id===t));e.edit_music.pop(a)},uploadEditMusic(e,t){let a=e.edit_music.find((e=>e.id===t));e.edit_music.pop(a)},setBpm(e,t){e.setting.bpm=t},setVolum(e,t){e.setting.volum=t},setViewDegree(e,t){e.setting.viewDegree=t},saveSetting(e,t){e.setting.mapSetting[t.length]=t},login(e,t){e.user=t},logout(e){e.user={name:"",id:-1}}},actions:{},modules:{},plugins:[d()]});const A=h("data-v-1d03321e");l("data-v-1d03321e");const U={class:"image"},N={class:"tool"};m();const q=A(((o,r,c,n,d,l)=>{const m=e("el-button"),h=e("el-descriptions-item"),y=e("el-descriptions"),g=e("el-card");return t(),a(g,{class:"music_card",onClick:r[3]||(r[3]=e=>l.playMusic(c.music_data.id)),shadow:"hover","body-style":{padding:"0px"}},{default:A((()=>[i("div",U,[i("img",{src:c.music_data.img_src},null,8,["src"])]),i(y,{class:"info",title:c.music_data.title,column:1},u({default:A((()=>[i(h,{label:"作者"},{default:A((()=>[s(p(c.music_data.mapper),1)])),_:1}),i(h,{label:"原曲"},{default:A((()=>[s(p(c.music_data.origin_song),1)])),_:1}),i(h,{label:"原曲頻道"},{default:A((()=>[s(p(c.music_data.producer),1)])),_:1}),i(h,{label:"難度"},{default:A((()=>[s(p(c.music_data.difficulty),1)])),_:1}),i(h,{label:"鍵位"},{default:A((()=>[s(p(c.music_data.key_count),1)])),_:1}),i(h,{label:"速度"},{default:A((()=>[s(p(c.music_data.bpm),1)])),_:1}),i(h,{label:"長度"},{default:A((()=>[s(p(c.music_data.duration),1)])),_:1}),i(h,{label:"收藏數"},{default:A((()=>[s(p(c.music_data.love_count),1)])),_:1}),i(h,{label:"遊玩數"},{default:A((()=>[s(p(c.music_data.play_count),1)])),_:1}),i(h,{label:"瀏覽數"},{default:A((()=>[s(p(c.music_data.view_count),1)])),_:1})])),_:2},[c.music_data.mapper==l.getUser.name?{name:"extra",fn:A((()=>[i("div",N,[i(m,{type:"primary",icon:"el-icon-edit",circle:"",onClick:r[1]||(r[1]=e=>l.editMusic(c.music_data.id))}),i(m,{type:"danger",icon:"el-icon-delete",circle:"",onClick:r[2]||(r[2]=e=>l.deleteMusic(c.music_data.id))})])]))}:void 0]),1032,["title"])])),_:1})}));const F={props:{music_data:Object},data:()=>({}),computed:{getUser(){return this.$store.getters.getUser}},methods:{playMusic(e){this.$router.push({name:"Play",query:{id:e}})},deleteMusic(e){event.stopPropagation(),this.axios.delete({}.VITE_BACK_URL+"/music_data",{params:{id:this.music_data.id}}).then((e=>{this.$notify({title:"刪除",message:y("i",{style:"color: teal"},"已刪除該音樂")})})).catch((e=>{console.log(e)}))},editMusic(e){event.stopPropagation(),this.$router.push({name:"Edit",query:{id:e}})}}};F.render=q,F.__scopeId="data-v-1d03321e";const G=h("data-v-3cffd34a");l("data-v-3cffd34a");const H={id:"playboard"},z={class:"toolBar"},K=s("Play"),Q=s("Pause"),W=s("Restart"),X=i("br",null,null,-1),Y=i("div",{class:"player"},[i("div",{id:"player"})],-1),J={class:"full-screen"};m();const Z=G(((o,r,c,n,d,l)=>{const m=e("el-button"),u=e("el-slider"),h=e("game_slider");return t(),a("div",H,[i("div",z,[i(m,{onClick:r[1]||(r[1]=e=>l.gameStart()),icon:"el-icon-video-play",round:"",type:"primary",disabled:1==d.playerState},{default:G((()=>[K])),_:1},8,["disabled"]),i(m,{onClick:r[2]||(r[2]=e=>l.gamePause()),icon:"el-icon-video-pause",round:"",type:"success",disabled:1!=d.playerState},{default:G((()=>[Q])),_:1},8,["disabled"]),i(m,{onClick:r[3]||(r[3]=e=>l.gameRestart()),icon:"el-icon-refresh-left",round:"",type:"warning"},{default:G((()=>[W])),_:1}),i(m,{round:"",type:"info"},{default:G((()=>[i(u,{modelValue:d.viewDegree,"onUpdate:modelValue":r[4]||(r[4]=e=>d.viewDegree=e),height:"10px",vertical:"",max:80,onChange:r[5]||(r[5]=e=>l.setViewDegree())},null,8,["modelValue"])])),_:1}),c.showProgressBar?(t(),a(u,{key:0,modelValue:d.currentTime,"onUpdate:modelValue":r[6]||(r[6]=e=>d.currentTime=e),max:c.music_data.duration,"show-input":"",onInput:r[7]||(r[7]=e=>l.seekTo()),onChange:r[8]||(r[8]=e=>l.seekToConfirm())},null,8,["modelValue","max"])):g("",!0),X,i("span",null,"分數:"+p(d.score)+" 分 ",1),i("span",null,"| Combo:"+p(d.combo)+" 次",1)]),i("div",{class:"row",style:l.playBoardStyle()},[Y,(t(!0),a(k,null,_(c.music_data.map_data,((e,o)=>(t(),a("div",J,[i("div",{class:"screen",id:"S"+e.key},[(t(!0),a(k,null,_(e.timeStamp,((i,o)=>(t(),a(h,{onClick:r[9]||(r[9]=e=>l.destroy()),class:e.key,color:e.color,bornTime:i,currentTime:d.currentTime,bpm:l.getBpm,restart:d.restart},null,8,["class","color","bornTime","currentTime","bpm","restart"])))),256))],8,["id"]),i(m,{class:"button",style:l.getButtonStyle(e.color),size:"medium",onClick:t=>l.hit(e.key,e.color,e.audio),id:"B"+e.key},{default:G((()=>[s(p(e.key),1)])),_:2},1032,["style","onClick","id"])])))),256))],4)])}));const ee={props:{music_data:Object,showProgressBar:{type:Boolean,default:!1}},data:()=>({viewDegree:0,currentTime:null,choiceTime:null,player:null,score:0,combo:0,maxCombo:0,lifeTimer:null,playerState:0,restart:!1,watchData:[]}),computed:{getMapData(){return this.$store.getters.getMapData},getBpm(){return this.music_data.bpm},getViewDegree(){return this.$store.getters.getViewDegree},getVolum(){return this.$store.getters.getVolum},judgeLine(){return 1===this.getBpm?[80.25,79.75,82,75,85,70]:1.5===this.getBpm?[80.5,78.5,83,74,85,68]:2===this.getBpm?[81,78,84,73,89,66]:.5===this.getBpm?[79.8,79.2,82,76,84,72]:.25===this.getBpm?[79.6,79.4,81,78,83,75]:void 0}},methods:{gameStart(){this.restart=!1,this.player.playVideo(),this.lifeTimer=setInterval((()=>{1===this.playerState&&(this.currentTime+=.015)}),15)},gamePause(){this.player.pauseVideo(),clearInterval(this.lifeTimer)},gameRestart(){this.restart=!0,this.currentTime=0,this.player.seekTo(this.currentTime),this.gamePause(),this.score=0,this.combo=0,this.maxCombo=0},playBoardStyle(){return{transform:`\n        rotateX(${this.viewDegree}deg)\n        scale(${1-this.viewDegree/170})`}},getButtonStyle:e=>({background:e}),hit(e,t,a){if(1===this.playerState){const i=document.getElementsByClassName(e);if("mute"!==a){let e=new Audio;e.volume=this.getVolum,e.src="./audio/"+a+".mp3",e.play()}if(i.length>0){let a=parseInt(i[0].style.top);a>50&&(this.appendEffect(e,a,t),i[0].click())}}},keydown(e,t){t?(this.watchData[e].button.click(),this.watchData[e].button.classList.add("show")):this.watchData[e].button.classList.remove("show")},judge(e){var t="";return this.judgeLine[0]>=e&&e>=this.judgeLine[1]?(this.score+=100,this.combo++,t="perfect"):this.judgeLine[2]>=e&&e>=this.judgeLine[0]||this.judgeLine[1]>=e&&e>=this.judgeLine[3]?(this.score+=30,this.combo++,t="excellent"):this.judgeLine[4]>=e&&e>=this.judgeLine[2]||this.judgeLine[3]>=e&&e>=this.judgeLine[5]?(this.score+=10,this.combo++,t="good"):(this.combo=0,t="miss"),this.combo>10&&this.combo<=30?this.score+=5:this.combo>30&&this.combo<=50?this.score+=10:this.combo>50&&this.combo<=100?this.score+=25:this.combo>100&&this.combo<=200?this.score+=35:this.combo>200&&(this.score+=50),this.combo>this.maxCombo&&(this.maxCombo=this.combo),t},init(){this.viewDegree=this.getViewDegree,this.music_data.map_data.map((e=>{const t=document.getElementById("B"+e.key);this.watchData.push({button:t,keyState:!1})}));const e=this;window.onkeydown=function(t){e.music_data.map_data.map((a=>{if(a.key.toLowerCase()===t.key.toLowerCase()){let t=e.music_data.map_data.indexOf(a);e.watchData[t].keyState=!0}}))},window.onkeyup=function(t){e.music_data.map_data.map((a=>{if(a.key.toLowerCase()===t.key.toLowerCase()){let t=e.music_data.map_data.indexOf(a);e.watchData[t].keyState=!1}}))}},appendEffect(e,t,a){const i=document.getElementById("S"+e),o=document.createElement("div");let s=this.judge(t);o.appendChild(document.createTextNode(`${s}`)),i.appendChild(o),"perfect"===s?o.classList.add("perfectEffect"):"excellent"===s?o.classList.add("excellentEffect"):"good"===s?o.classList.add("goodEffect"):o.classList.add("effect"),o.style.top=t+"%",o.style.background=a},destroy(){this.$emit("destroy")},seekTo(){1!==this.playerState&&(this.gamePause(),this.restart=!0,this.player.seekTo(this.currentTime))},seekToConfirm(){this.gamePause(),this.restart=!0,this.player.seekTo(this.currentTime)},onPlayerReady(e){this.player.setPlaybackQuality("medium")},onPlayerStateChange(e){this.playerState=e.data},setViewDegree(){this.$store.commit("setViewDegree",this.viewDegree)},over(){this.$alert(`恭喜完成${this.music_data.title}\n        你獲得${this.score}分!\n        最高COMBO${this.maxCombo}次\n        `,"過關",{confirmButtonText:"確定"})}},mounted(){this.player=new YT.Player("player",{videoId:this.music_data.youtube_id,width:"100%",height:"100%",playerVars:{loop:1,rel:0},events:{onReady:this.onPlayerReady,onStateChange:this.onPlayerStateChange}}),this.init()},watch:{"watchData.0.keyState":{handler:function(e){this.keydown(0,e)},deep:!0},"watchData.1.keyState":{handler:function(e){this.keydown(1,e)},deep:!0},"watchData.2.keyState":{handler:function(e){this.keydown(2,e)},deep:!0},"watchData.3.keyState":{handler:function(e){this.keydown(3,e)},deep:!0},"watchData.4.keyState":{handler:function(e){this.keydown(4,e)},deep:!0},"watchData.5.keyState":{handler:function(e){this.keydown(5,e)},deep:!0},"watchData.6.keyState":{handler:function(e){this.keydown(6,e)},deep:!0}}};ee.render=Z,ee.__scopeId="data-v-3cffd34a";const te=h("data-v-03d9451e")(((e,i,o,s,r,c)=>c.exist?(t(),a("div",{key:0,class:"game_slider",style:c.gameSliderStyle,onClick:i[1]||(i[1]=e=>c.destroy())},null,4)):g("",!0)));const ae={data:()=>({break:!1}),props:{bpm:Number,color:String,bornTime:Number,currentTime:Number,restart:{type:Boolean,default:!1}},computed:{gameSliderStyle(){return{top:this.top+"%",background:this.color}},top(){return this.sneak-this.bornTime>0?75*(this.sneak-this.bornTime)*this.bpm:0},sneak(){return 1===this.bpm?this.currentTime+1.15:1.5===this.bpm?this.currentTime+.83:2===this.bpm?this.currentTime+.56:.5===this.bpm?this.currentTime+2.1:.25===this.bpm?this.currentTime+4.35:void 0},exist(){return this.top>0&&this.top<100&&!1===this.break}},methods:{destroy(){this.break=!0}},watch:{restart(){this.break=!1}}};ae.render=te,ae.__scopeId="data-v-03d9451e";const ie=f(B);ie.use(O),ie.use(R),ie.use(b),ie.use(w),ie.use(S,v),ie.component("music_card",F),ie.component("playboard",ee),ie.component("game_slider",ae),ie.mount("#app");
