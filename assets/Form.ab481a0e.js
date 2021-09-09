import{p as e,i as t,r as a,o as l,c as i,a as s,v as o,t as u,l as d,F as r,m as n,b as m,k as c,h as p}from"./vendor.98648e79.js";const _=c();e("data-v-b818c3e0");const g={id:"Form"},h={key:0,class:"firstStep"},y=s("h3",null,"找到你要製作的音樂:",-1),f={key:0,class:"youtubeCard marginTop"},b={class:"image"},v={class:"marginTop"},k={class:"marginTop"},V={class:"marginTop"},w=m("確認"),S=s("h3",null,"輸入你的音樂資訊:",-1),x={class:"iframe"},C=m("極慢"),U=m("慢"),T=m("正常"),$=m("快"),D=m("極快"),I=m("確認"),M=m("重寫"),F=m("上一步"),A={key:2,class:"thirdStep"},z={class:"row"},E={class:"setting"},B={class:"audio"},j={class:"word"},R={class:"row marginTop"},q=m("DEMO"),N=m("確認"),O=m("上一步"),Y={key:3,class:"fourStep"},H=m("回到個人頁面");t();const K=_(((e,t,c,p,K,L)=>{const G=a("el-button"),J=a("el-input"),P=a("el-col"),X=a("el-row"),Z=a("el-card"),Q=a("el-skeleton"),W=a("el-form-item"),ee=a("el-radio-button"),te=a("el-radio-group"),ae=a("el-input-number"),le=a("el-form"),ie=a("el-color-picker"),se=a("el-option"),oe=a("el-option-group"),ue=a("el-select"),de=a("playboard"),re=a("el-drawer"),ne=a("el-result"),me=a("el-main"),ce=a("el-step"),pe=a("el-steps");return l(),i("div",g,[s(me,null,{default:_((()=>[0==K.active?(l(),i("div",h,[y,s(J,{class:"marginTop",modelValue:K.searchValue,"onUpdate:modelValue":t[2]||(t[2]=e=>K.searchValue=e),placeholder:'請輸入youtube網址/電腦版含有"watch?v="的單影片網址(沒有channel)',onKeyup:t[3]||(t[3]=o((e=>L.search(K.searchValue)),["enter"]))},{append:_((()=>[s(G,{onClick:t[1]||(t[1]=e=>L.search(K.searchValue)),icon:"el-icon-search",circle:""})])),_:1},8,["modelValue"]),K.music_data.youtube_id.length>0?(l(),i("div",f,[s(X,{justify:"cetnter"},{default:_((()=>[s(P,null,{default:_((()=>[s(Z,{shadow:"hover","body-style":{padding:"8px"}},{default:_((()=>[s(X,{justify:"space-around",gutter:8},{default:_((()=>[s(P,{span:24,sm:6,lg:4},{default:_((()=>[s("div",b,[s("img",{src:K.music_data.img_src},null,8,["src"])])])),_:1}),s(P,{span:24,sm:18,lg:20},{default:_((()=>[s("h4",v,"歌名: "+u(K.music_data.origin_song),1),s("h4",k,"頻道: "+u(K.music_data.producer),1),s("h4",V,"時間: "+u(L.getTimeString),1)])),_:1})])),_:1})])),_:1})])),_:1}),s(P,null,{default:_((()=>[s(G,{class:"marginTop",type:"primary",onClick:t[4]||(t[4]=e=>L.selectVideo())},{default:_((()=>[w])),_:1})])),_:1})])),_:1})])):(l(),i(Q,{key:1,class:"marginTop",rows:5,animated:""}))])):d("",!0),1==K.active?(l(),i(le,{key:1,class:"secondStep",model:K.music_data,rules:K.rules,ref:"map_data","label-width":"100px"},{default:_((()=>[S,s("div",x,[s("iframe",{type:"text/html",width:"100%",height:"100%",src:K.music_data.video_url,frameborder:"0"},null,8,["src"])]),s(W,{class:"marginTop",label:"標題",prop:"title"},{default:_((()=>[s(J,{modelValue:K.music_data.title,"onUpdate:modelValue":t[5]||(t[5]=e=>K.music_data.title=e)},null,8,["modelValue"])])),_:1}),s(W,{label:"作者",prop:"mapper"},{default:_((()=>[s(J,{modelValue:K.music_data.mapper,"onUpdate:modelValue":t[6]||(t[6]=e=>K.music_data.mapper=e)},null,8,["modelValue"])])),_:1}),s(W,{label:"落下速度",prop:"bpm"},{default:_((()=>[s(te,{modelValue:K.music_data.bpm,"onUpdate:modelValue":t[7]||(t[7]=e=>K.music_data.bpm=e)},{default:_((()=>[s(ee,{label:.25},{default:_((()=>[C])),_:1},8,["label"]),s(ee,{label:.5},{default:_((()=>[U])),_:1},8,["label"]),s(ee,{label:1},{default:_((()=>[T])),_:1}),s(ee,{label:1.5},{default:_((()=>[$])),_:1},8,["label"]),s(ee,{label:2},{default:_((()=>[D])),_:1})])),_:1},8,["modelValue"])])),_:1}),s(W,{label:"鍵位數量",prop:"key_count"},{default:_((()=>[s(ae,{modelValue:K.music_data.key_count,"onUpdate:modelValue":t[8]||(t[8]=e=>K.music_data.key_count=e),min:1,max:7,label:"健位數量"},null,8,["modelValue"])])),_:1}),s(W,null,{default:_((()=>[s(G,{type:"primary",onClick:t[9]||(t[9]=e=>L.submitForm("map_data"))},{default:_((()=>[I])),_:1}),s(G,{onClick:t[10]||(t[10]=e=>L.resetForm("map_data"))},{default:_((()=>[M])),_:1}),s(G,{type:"danger",onClick:t[11]||(t[11]=e=>L.previous())},{default:_((()=>[F])),_:1})])),_:1})])),_:1},8,["model","rules"])):d("",!0),2==K.active?(l(),i("div",A,[s("div",z,[(l(!0),i(r,null,n(K.music_data.map_data,((e,t)=>(l(),i("div",{class:"col",key:t},[s("h1",null,u(t)+"號位",1),s(G,{class:"button shadow",style:L.getButtonStyle(e.color),size:"medium"},{default:_((()=>[m(u(e.key),1)])),_:2},1032,["style"]),s("div",E,[s(J,{maxlength:"1",onInput:e=>L.edit(e,t),placeholder:"英文/數字"},{append:_((()=>[s(ie,{modelValue:e.color,"onUpdate:modelValue":t=>e.color=t,size:"mini"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["onInput"]),s("div",B,[s(ue,{class:"select",modelValue:e.audio,"onUpdate:modelValue":t=>e.audio=t},{default:_((()=>[(l(!0),i(r,null,n(K.audio,(e=>(l(),i(oe,{key:e.label,label:e.label},{default:_((()=>[(l(!0),i(r,null,n(e.options,(e=>(l(),i(se,{key:e,value:e},null,8,["value"])))),128))])),_:2},1032,["label"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"]),s("div",j,[s(G,{onClick:t=>L.playAudio(e.audio),icon:"el-icon-video-play"},null,8,["onClick"])])])])])))),128))]),s("div",R,[s(G,{onClick:t[13]||(t[13]=e=>K.drawer=!0),type:"success"},{default:_((()=>[q,s(re,{title:"DEMO",modelValue:K.drawer,"onUpdate:modelValue":t[12]||(t[12]=e=>K.drawer=e),size:"60%"},{default:_((()=>[(K.drawer=!0)?(l(),i(de,{key:0,music_data:K.music_data},null,8,["music_data"])):d("",!0)])),_:1},8,["modelValue"])])),_:1}),s(G,{type:"primary",onClick:t[14]||(t[14]=e=>L.confirm())},{default:_((()=>[N])),_:1}),s(G,{type:"danger",onClick:t[15]||(t[15]=e=>L.previous())},{default:_((()=>[O])),_:1})])])):d("",!0),3==K.active?(l(),i("div",Y,[s(ne,{icon:"success",title:"成功提示"},{extra:_((()=>[s(G,{type:"primary",size:"medium",onClick:t[16]||(t[16]=e=>L.leave())},{default:_((()=>[H])),_:1})])),_:1})])):d("",!0)])),_:1}),s(pe,{active:K.active,"align-center":"","finish-status":"success"},{default:_((()=>[s(ce,{title:"找到Youtube音樂"}),s(ce,{title:"輸入你的歌曲資訊"}),s(ce,{title:"編輯預設個人設定"})])),_:1},8,["active"])])}));const L={data:()=>({drawer:!1,active:0,searchValue:"",audio:[{options:["mute"]},{label:"樂器",options:["pianoC","pianoD","pianoE","pianoF","pianoG","pianoA","pianoB","drum","small_drum","Japanese_drum"]},{label:"其他",options:["cracker","laser","stabbing","short_punch","sh_pickup","pushing_a_key","cat_like"]}],music_data:{title:null,mapper:null,mapper_id:null,bpm:1,duration:0,key_count:7,difficulty:null,origin_song:"",youtube_id:"",video_url:"",img_src:"",producer:"",love_count:0,play_count:0,view_count:0,map_data:{}},rules:{title:[{required:!0,message:"請輸入標題",trigger:"blur"},{min:1,max:200,message:"長度請控制在200個字以內",trigger:"blur"}],mapper:[{required:!0,message:"作者不能為空",trigger:"blur"},{min:1,max:30,message:"長度請控制在30個字以內",trigger:"blur"}]}}),computed:{getMapSetting(){return this.$store.getters.getMapSetting[this.music_data.key_count-1]},getTimeString(){let e=parseInt(this.music_data.duration/60),t=parseInt(this.music_data.duration%60);return t<10&&(t="0"+t),e+"分"+t+"秒"},getVolum(){return this.$store.getters.getVolum},getUser(){return this.$store.getters.getUser}},methods:{edit(e,t){let a=!1;this.music_data.map_data.map((t=>{t.key.toLowerCase()==e.toLowerCase()&&(a=!0)})),/[a-z]|[A-Z]|[0-9]/.test(e)&&!a?this.music_data.map_data[t].key=e:this.$notify({title:"錯誤",message:p("i",{style:"color: red"},"同健位已被設定")})},getButtonStyle:e=>({background:e}),search(e){this.getInfo(this.getYoutubeID(e))},getYoutubeID(e){let t=e.split("?v=")[1].split("&");return console.log(t),t[0]},getDuration(e){var t=/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/,a=0,l=0,i=0;if(t.exec(e)){var s=t.exec(e);return s[1]&&(a=Number(s[1])),s[2]&&(l=Number(s[2])),s[3]&&(i=Number(s[3])),3600*a+60*l+i}},getInfo(e){const t=window.gapi.client.youtube.videos.list({part:["snippet,contentDetails,statistics"],id:e});let a=this;t.execute((function(e){e.items.map((e=>{try{e.id.playlistId||(a.music_data.youtube_id=e.id,a.music_data.origin_song=e.snippet.title,a.music_data.producer=e.snippet.channelTitle,a.music_data.duration=a.getDuration(e.contentDetails.duration),a.music_data.video_url="https://www.youtube.com/embed/"+e.id,a.music_data.img_src="http://img.youtube.com/vi/"+e.id+"/0.jpg",a.music_data.mapper=a.getUser.name,a.music_data.mapper_id=a.getUser.id)}catch(t){console.log(t)}}))}))},submitForm(e){this.$refs[e].validate((e=>{if(!e)return!1;this.next(),this.applySetting(),this.setRandomSlider()}))},applySetting(){this.music_data.map_data=this.getMapSetting},saveSetting(){this.$store.commit("saveSetting",this.music_data.map_data)},setRandomSlider(){this.music_data.map_data.forEach((e=>{if(0===e.timeStamp.length)for(let t=0;t<5;t++)e.timeStamp.push(10*Math.random());e.timeStamp.sort()}))},deleteRandomSlider(){this.music_data.map_data.forEach((e=>{e.timeStamp=[]}))},resetForm(e){this.$refs[e].resetFields()},playAudio(e){if("mute"!==e){let t=new Audio;t.volume=this.getVolum,t.src="./audio/"+e+".mp3",t.play()}},selectVideo(){this.music_data.title=this.music_data.origin_song+" from "+this.music_data.mapper,this.next()},next(){this.active++},previous(){this.active--},confirm(){this.deleteRandomSlider(),this.axios.post("https://music-game-rhapsody.herokuapp.com/music_data",this.music_data).then((e=>{this.next(),this.$notify({title:"Map Data",message:p("i",{style:"color: teal"},"已經創建一則音樂")})})).catch((e=>{this.$notify({title:"Map Data",message:p("i",{style:"color: teal"},"發生錯誤")}),console.log(e)})),this.$confirm("是否把此頁設定覆蓋到預設設定","覆蓋預設設定",{confirmButtonText:"儲存",cancelButtonText:"取消",type:"warning",center:!0}).then((()=>{this.saveSetting(),this.$message({type:"success",message:"已更新預設設定"})})).catch((()=>{this.$message({type:"info",message:"保持原本預設設定"})}))},leave(){this.$router.push({name:"User"})}},mounted(){gapi.client.load("youtube","v3"),gapi.client.setApiKey("AIzaSyDyUamM4CqwXVHIfxw5x50iEbrOln61nus")}};L.render=K,L.__scopeId="data-v-b818c3e0";export{L as default};
