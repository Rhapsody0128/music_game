import{p as e,i as t,r as a,o as s,c as i,a as o,l as r,t as l,F as n,m as d,b as c,k as h}from"./vendor.98648e79.js";const m=h();e("data-v-659b5a2c");const u={id:"Play"},p={id:"playboard"},y={class:"toolBar"},g=c("Play"),w=c("Pause"),k=c("Restart"),f=o("br",null,null,-1),b=o("div",{class:"player"},[o("div",{id:"player"})],-1),_={class:"full-screen"};t();const v=m(((e,t,h,v,S,D)=>{const T=a("el-header"),C=a("el-button"),B=a("el-slider"),x=a("game_slider"),V=a("el-col"),L=a("el-row"),P=a("el-skeleton");return s(),i("div",u,[o(T),S.ready?(s(),i(L,{key:0,justify:"center"},{default:m((()=>[o(V,{xl:16,lg:20,md:24},{default:m((()=>[o("div",p,[o("div",y,[o(C,{onClick:t[1]||(t[1]=e=>D.gameStart()),icon:"el-icon-video-play",round:"",type:"primary",disabled:1==S.playerState},{default:m((()=>[g])),_:1},8,["disabled"]),o(C,{onClick:t[2]||(t[2]=e=>D.gamePause()),icon:"el-icon-video-pause",round:"",type:"success",disabled:1!=S.playerState},{default:m((()=>[w])),_:1},8,["disabled"]),o(C,{onClick:t[3]||(t[3]=e=>D.gameRestart()),icon:"el-icon-refresh-left",round:"",type:"warning"},{default:m((()=>[k])),_:1}),o(C,{round:"",type:"info"},{default:m((()=>[o(B,{modelValue:S.viewDegree,"onUpdate:modelValue":t[4]||(t[4]=e=>S.viewDegree=e),height:"10px",vertical:"",max:80,onChange:t[5]||(t[5]=e=>D.setViewDegree())},null,8,["modelValue"])])),_:1}),e.showProgressBar?(s(),i(B,{key:0,modelValue:S.currentTime,"onUpdate:modelValue":t[6]||(t[6]=e=>S.currentTime=e),max:S.music_data.duration,"show-input":"",onInput:t[7]||(t[7]=e=>D.seekTo()),onChange:t[8]||(t[8]=e=>D.seekToConfirm())},null,8,["modelValue","max"])):r("",!0),f,o("span",null,"分數:"+l(S.score)+" 分 ",1),o("span",null,"| Combo:"+l(S.combo)+" 次",1)]),o("div",{class:"row",style:D.playBoardStyle()},[b,(s(!0),i(n,null,d(S.music_data.map_data,((e,a)=>(s(),i("div",_,[o("div",{class:"screen",id:"S"+e.key},[(s(!0),i(n,null,d(e.timeStamp,((a,o)=>(s(),i(x,{onClick:t[9]||(t[9]=e=>D.destroy()),class:e.key,color:e.color,bornTime:a,currentTime:S.currentTime,bpm:D.getBpm,restart:S.restart},null,8,["class","color","bornTime","currentTime","bpm","restart"])))),256))],8,["id"]),o(C,{class:"button",style:D.getButtonStyle(e.color),size:"medium",onClick:t=>D.hit(e.key,e.color,e.audio),id:"B"+e.key},{default:m((()=>[c(l(e.key),1)])),_:2},1032,["style","onClick","id"])])))),256))],4)])])),_:1})])),_:1})):(s(),i(P,{key:1,class:"marginTop",rows:12,animated:""}))])}));const S={data:()=>({ready:!1,music_data:{},viewDegree:0,currentTime:null,choiceTime:null,player:null,score:0,combo:0,maxCombo:0,lifeTimer:null,playerState:0,restart:!1,watchData:[]}),methods:{gameStart(){this.restart=!1,this.player.playVideo(),this.lifeTimer=setInterval((()=>{1===this.playerState&&(this.currentTime+=.01)}),10)},gamePause(){this.player.pauseVideo(),clearInterval(this.lifeTimer)},gameRestart(){this.restart=!0,this.currentTime=0,this.player.seekTo(this.currentTime),this.gamePause(),this.score=0,this.combo=0,this.maxCombo=0},playBoardStyle(){return{transform:`\n        rotateX(${this.viewDegree}deg)\n        scale(${1-this.viewDegree/170})`}},getButtonStyle:e=>({background:e}),hit(e,t,a){if(1===this.playerState){const s=document.getElementsByClassName(e);if("mute"!==a){let e=new Audio;e.volume=this.getVolum,e.src="./audio/"+a+".mp3",e.play()}if(s.length>0){let a=parseInt(s[0].style.top);a>50&&(this.appendEffect(e,a,t),s[0].click())}}},keydown(e,t){t?(this.watchData[e].button.click(),this.watchData[e].button.classList.add("show")):this.watchData[e].button.classList.remove("show")},judge(e){var t="";return this.judgeLine[0]<=e?(this.score+=100,this.combo++,t="perfect"):this.judgeLine[1]<=e&&e<this.judgeLine[0]?(this.score+=30,this.combo++,t="excellent"):this.judgeLine[2]<=e&&e<this.judgeLine[1]?(this.score+=10,this.combo++,t="good"):(this.combo=0,t="miss"),this.combo>10&&this.combo<=30?this.score+=5:this.combo>30&&this.combo<=50?this.score+=10:this.combo>50&&this.combo<=100?this.score+=25:this.combo>100&&this.combo<=200?this.score+=35:this.combo>200&&(this.score+=50),this.combo>this.maxCombo&&(this.maxCombo=this.combo),t},init(){this.viewDegree=this.getViewDegree,this.music_data.map_data.map((e=>{const t=document.getElementById("B"+e.key);this.watchData.push({button:t,keyState:!1})}));const e=this;window.onkeydown=function(t){e.music_data.map_data.map((a=>{if(a.key.toLowerCase()===t.key.toLowerCase()){let t=e.music_data.map_data.indexOf(a);e.watchData[t].keyState=!0}}))},window.onkeyup=function(t){e.music_data.map_data.map((a=>{if(a.key.toLowerCase()===t.key.toLowerCase()){let t=e.music_data.map_data.indexOf(a);e.watchData[t].keyState=!1}}))}},setYoutube(){this.player=new YT.Player("player",{videoId:this.music_data.youtube_id,width:"100%",height:"100%",playerVars:{loop:1,rel:0,controls:0},events:{onReady:this.onPlayerReady,onStateChange:this.onPlayerStateChange}})},appendEffect(e,t,a){const s=document.getElementById("S"+e),i=document.createElement("div");let o=this.judge(t);i.appendChild(document.createTextNode(`${o}`)),s.appendChild(i),"perfect"===o?i.classList.add("perfectEffect"):"excellent"===o?i.classList.add("excellentEffect"):"good"===o?i.classList.add("goodEffect"):i.classList.add("effect"),i.style.top=t+"%",i.style.background=a},destroy(){this.$emit("destroy")},seekTo(){1!==this.playerState&&(this.gamePause(),this.restart=!0,this.player.seekTo(this.currentTime))},seekToConfirm(){this.gamePause(),this.restart=!0,this.player.seekTo(this.currentTime)},onPlayerReady(e){this.player.setPlaybackQuality("medium")},onPlayerStateChange(e){this.playerState=e.data},setViewDegree(){this.$store.commit("setViewDegree",this.viewDegree)},over(){this.$alert(`恭喜完成${this.music_data.title}\n        你獲得${this.score}分!\n        最高COMBO${this.maxCombo}次\n        `,"過關",{confirmButtonText:"確定"})}},computed:{getMapData(){return this.$store.getters.getMapData},getBpm(){return this.music_data.bpm},getViewDegree(){return this.$store.getters.getViewDegree},getVolum(){return this.$store.getters.getVolum},judgeLine(){return 1===this.getBpm?[95,92,87]:1.5===this.getBpm?[94.5,91,85]:2===this.getBpm?[94,90,82]:.5===this.getBpm?[96,94,90]:.25===this.getBpm?[97,95.5,92]:void 0}},async mounted(){await this.axios.get("https://music-game-rhapsody.herokuapp.com/music_data",{params:{id:this.$route.query.id}}).then((e=>{this.music_data=e.data[0],this.music_data.map_data=JSON.parse(e.data[0].map_data),this.ready=!0})).catch((e=>{console.log(e)})),this.init(),this.setYoutube()},watch:{"watchData.0.keyState":{handler:function(e){this.keydown(0,e)},deep:!0},"watchData.1.keyState":{handler:function(e){this.keydown(1,e)},deep:!0},"watchData.2.keyState":{handler:function(e){this.keydown(2,e)},deep:!0},"watchData.3.keyState":{handler:function(e){this.keydown(3,e)},deep:!0},"watchData.4.keyState":{handler:function(e){this.keydown(4,e)},deep:!0},"watchData.5.keyState":{handler:function(e){this.keydown(5,e)},deep:!0},"watchData.6.keyState":{handler:function(e){this.keydown(6,e)},deep:!0}}};S.render=v,S.__scopeId="data-v-659b5a2c";export{S as default};
