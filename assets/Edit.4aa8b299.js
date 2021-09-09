import{p as e,i as t,r as a,o as i,c as s,a as o,l as d,F as l,m as n,t as r,b as c,k as h,h as u}from"./vendor.98648e79.js";const m=h();e("data-v-4ab96db8");const p={id:"Edit"},y={id:"editboard"},g={class:"toolBar"},f=c("Play"),w=c("Pause"),_=c("Save"),k=c("Load"),D=c("Clear"),b=c("Upload"),v=c("DEMO"),S={class:"table"},T=o("th",null,"鍵位",-1),$=o("th",null,"次數",-1),C={class:"tableText"},V={class:"row"},M={class:"player"},x={key:0,id:"player"},B={class:"full-screen"};t();const E=m(((e,t,h,u,E,P)=>{const L=a("el-header"),U=a("el-button"),I=a("playboard"),A=a("el-drawer"),O=a("el-slider"),j=a("el-col"),R=a("el-row"),Y=a("el-skeleton");return i(),s("div",p,[o(L),E.ready?(i(),s(R,{key:0,justify:"center"},{default:m((()=>[o(j,{xl:16,lg:20,md:24},{default:m((()=>[o("div",y,[o("div",g,[o(U,{onClick:t[1]||(t[1]=e=>P.gameStart()),icon:"el-icon-video-play",round:"",type:"primary",disabled:1==E.playerState},{default:m((()=>[f])),_:1},8,["disabled"]),o(U,{onClick:t[2]||(t[2]=e=>P.gamePause()),icon:"el-icon-video-pause",round:"",disabled:1!=E.playerState},{default:m((()=>[w])),_:1},8,["disabled"]),o(U,{onClick:t[3]||(t[3]=e=>P.saveMapData()),plain:"",icon:"el-icon-folder-checked",round:"",type:"warning"},{default:m((()=>[_])),_:1}),o(U,{onClick:t[4]||(t[4]=e=>P.loadMapData()),plain:"",icon:"el-icon-folder-opened",round:"",type:"primary"},{default:m((()=>[k])),_:1}),o(U,{onClick:t[5]||(t[5]=e=>P.clearMapData()),plain:"",icon:"el-icon-folder-delete",round:"",type:"danger"},{default:m((()=>[D])),_:1}),o(U,{onClick:t[6]||(t[6]=e=>P.uploadMapData()),plain:"",icon:"el-icon-upload",round:"",type:"success"},{default:m((()=>[b])),_:1}),o(U,{onClick:t[8]||(t[8]=e=>P.openDrawer()),plain:"",icon:"el-icon-view",round:"",type:"info"},{default:m((()=>[v,o(A,{title:"DEMO",modelValue:E.drawer,"onUpdate:modelValue":t[7]||(t[7]=e=>E.drawer=e),size:"80%"},{default:m((()=>[E.drawer?(i(),s(I,{key:0,music_data:E.music_data,showProgressBar:!0},null,8,["music_data"])):d("",!0)])),_:1},8,["modelValue"])])),_:1}),o(U,{round:"",type:"info"},{default:m((()=>[o(O,{modelValue:E.viewDegree,"onUpdate:modelValue":t[9]||(t[9]=e=>E.viewDegree=e),height:"10px",vertical:"",max:80,onChange:t[10]||(t[10]=e=>P.setViewDegree())},null,8,["modelValue"])])),_:1}),o("table",S,[o("tr",null,[T,(i(!0),s(l,null,n(E.music_data.map_data,(e=>(i(),s("td",{style:P.getButtonStyle(e.color)},r(e.key),5)))),256))]),o("tr",null,[$,(i(!0),s(l,null,n(E.music_data.map_data,(e=>(i(),s("td",C,r(e.timeStamp.length),1)))),256))])])]),o(O,{modelValue:E.currentTime,"onUpdate:modelValue":t[11]||(t[11]=e=>E.currentTime=e),height:"300",max:E.music_data.duration,"show-input":"",onInput:t[12]||(t[12]=e=>P.seekTo()),onChange:t[13]||(t[13]=e=>P.seekToConfirm())},null,8,["modelValue","max"]),o("div",V,[o("div",{class:"col",style:P.editBoardStyle()},[o("div",M,[E.ready?(i(),s("div",x)):d("",!0)]),(i(!0),s(l,null,n(E.music_data.map_data,((e,t)=>(i(),s("div",B,[o("div",{class:"screen",id:"S"+e.key},null,8,["id"]),o(U,{class:"button",style:P.getButtonStyle(e.color),size:"medium",onClick:a=>P.hit(e.key,e.color,e.audio,t),id:"B"+e.key},{default:m((()=>[c(r(e.key),1)])),_:2},1032,["style","onClick","id"])])))),256))],4)])])])),_:1})])),_:1})):(i(),s(Y,{key:1,class:"marginTop",rows:12,animated:""}))])}));const P={data:()=>({drawer:!1,loading:!0,viewDegree:0,currentTime:null,choiceTime:null,player:null,score:0,combo:0,lifeTimer:null,playerState:0,watchData:[],ready:!1,music_data:{}}),computed:{getViewDegree(){return this.$store.getters.getViewDegree},getVolum(){return this.$store.getters.getVolum},getUser(){return this.$store.getters.getUser}},methods:{gameStart(){this.player.playVideo(),this.lifeTimer=setInterval((()=>{1===this.playerState&&(this.currentTime+=.015)}),15)},gamePause(){this.player.pauseVideo(),clearInterval(this.lifeTimer)},editBoardStyle(){return{transform:`\n        rotateX(${this.viewDegree}deg)\n        scale(${1-this.viewDegree/170})`}},getButtonStyle:e=>({background:e}),openDrawer(){this.drawer=!0,this.gamePause()},hit(e,t,a,i){if(1===this.playerState){if("mute"!==a){let e=new Audio;e.volume=this.getVolum,e.src="./audio/"+a+".mp3",e.play()}this.watchData[i].button.classList.add("show"),this.appendEffect(e,t),this.judge(),this.editMap(i,this.player.getCurrentTime())}},keydown(e,t){null!==this.watchData[e].button&&(t?this.watchData[e].button.click():this.watchData[e].button.classList.remove("show"))},editMap(e,t){this.music_data.map_data[e].timeStamp.push(t)},init(){this.viewDegree=this.getViewDegree,this.music_data.map_data.map((e=>{const t=document.getElementById("B"+e.key);this.watchData.push({button:t,keyState:!1})}));const e=this;document.onkeydown=function(t){e.music_data.map_data.map((a=>{if(a.key.toLowerCase()===t.key.toLowerCase()){let t=e.music_data.map_data.indexOf(a);e.watchData[t].keyState=!0}}))},document.onkeyup=function(t){e.music_data.map_data.map((a=>{if(a.key.toLowerCase()===t.key.toLowerCase()){let t=e.music_data.map_data.indexOf(a);e.watchData[t].keyState=!1}}))},this.findAndAutoLoad()},setYoutbe(e){this.player=new YT.Player("player",{videoId:e,width:"100%",height:"100%",playerVars:{loop:1,rel:0,controls:0},events:{onReady:this.onPlayerReady,onStateChange:this.onPlayerStateChange}})},saveMapData(){this.music_data.map_data.forEach((e=>{e.timeStamp.sort()})),this.$store.commit("saveEditMusic",this.music_data),this.$notify({title:"儲存",message:u("i",{style:"color: teal"},"已儲存資料到本地")})},loadMapData(){let e=this.$store.getters.getEditMusic.find((e=>e.id===this.music_data.id));void 0===e?this.$notify({title:"讀取失敗",message:u("i",{style:"color: teal"},"本地沒有存取的資料")}):(this.music_data.map_data=e.map_data,this.$notify({title:"讀取成功",message:u("i",{style:"color: teal"},"已讀取本地的資料")}))},findAndAutoLoad(){void 0===this.$store.getters.getEditMusic.find((e=>e.id===this.music_data.id))?this.$confirm("本地端沒有這首歌的紀錄檔，要從頭開始編輯嗎?","重頭編輯",{confirmButtonText:"重頭開始",cancelButtonText:"維持雲端紀錄",type:"warning",center:!0}).then((()=>{this.$message({type:"success",message:"重頭開始"}),this.clearMapData()})).catch((()=>{this.$message({type:"info",message:"維持雲端紀錄"})})):this.$confirm("本地端有這首歌的紀錄，需要讀取嗎?","偵測到紀錄",{confirmButtonText:"讀取本地紀錄",cancelButtonText:"維持雲端紀錄",type:"warning",center:!0}).then((()=>{this.$message({type:"success",message:"讀取成功"}),this.loadMapData()})).catch((()=>{this.$message({type:"info",message:"維持雲端紀錄"})}))},clearMapData(){this.$store.commit("clearEditMusic",this.music_data.id),this.music_data.map_data.forEach((e=>{e.timeStamp=[]})),this.$notify({title:"清空",message:u("i",{style:"color: teal"},"已清空本地資料")})},uploadMapData(){this.axios.patch("https://music-game-rhapsody.herokuapp.com/music_data",{data:{map_data:this.music_data.map_data},query:{id:this.music_data.id}}).then((e=>{this.$notify({title:"上傳成功",message:u("i",{style:"color: teal"},"已上傳資料")})})).catch((e=>{this.$notify({title:"上傳失敗",message:u("i",{style:"color: teal"},`${e}`)}),console.log(e)}))},setViewDegree(){this.$store.commit("setViewDegree",this.viewDegree)},judge(){this.score+=100,this.combo++,this.combo>10&&this.combo<=30?this.score+=5:this.combo>30&&this.combo<=50?this.score+=10:this.combo>50&&this.combo<=100?this.score+=25:this.combo>100&&this.combo<=200?this.score+=35:this.combo>200&&(this.score+=50)},appendEffect(e,t){const a=document.getElementById("S"+e),i=document.createElement("div");i.appendChild(document.createTextNode("perfect")),i.classList.add("perfectEffect"),i.style.top="97.5%",i.style.background=t,a.appendChild(i)},seekTo(){1!==this.playerState&&(this.player.seekTo(this.currentTime),this.gamePause())},seekToConfirm(){this.player.seekTo(this.currentTime),this.gamePause()},onPlayerReady(){this.player.setPlaybackQuality("medium")},onPlayerStateChange(e){this.playerState=e.data},checkUser(){this.getUser.id!==this.music_data.mapper_id&&(this.$router.push({name:"Home"}),console.log("你是誰?亂來"))}},async mounted(){await this.axios.get("https://music-game-rhapsody.herokuapp.com/music_data",{params:{id:this.$route.query.id}}).then((e=>{this.music_data=e.data[0],this.music_data.map_data=JSON.parse(e.data[0].map_data),this.ready=!0,this.setYoutbe(this.music_data.youtubeID)})).catch((e=>{console.log(e)})),this.init(),this.checkUser()},watch:{"watchData.0.keyState":{handler:function(e){this.keydown(0,e)},deep:!0},"watchData.1.keyState":{handler:function(e){this.keydown(1,e)},deep:!0},"watchData.2.keyState":{handler:function(e){this.keydown(2,e)},deep:!0},"watchData.3.keyState":{handler:function(e){this.keydown(3,e)},deep:!0},"watchData.4.keyState":{handler:function(e){this.keydown(4,e)},deep:!0},"watchData.5.keyState":{handler:function(e){this.keydown(5,e)},deep:!0},"watchData.6.keyState":{handler:function(e){this.keydown(6,e)},deep:!0}}};P.render=E,P.__scopeId="data-v-4ab96db8";export{P as default};