import{p as e,h as a,r as t,o as l,c as i,a as s,u,t as o,j as d,F as r,k as n,b as m,i as c,s as p}from"./vendor.4a10e982.js";const _=c();e("data-v-cf00609a");const g={id:"Form"},h={key:0,class:"firstStep"},f=s("h3",null,"找到你要製作的音樂:",-1),y={key:0,class:"youtubeCard marginTop"},b={class:"image"},v={class:"marginTop"},V={class:"marginTop"},k={class:"marginTop"},w=m("確認"),S=s("h3",null,"輸入你的音樂資訊:",-1),U={class:"iframe"},x=m("極慢"),T=m("慢"),C=m("正常"),I=m("快"),D=m("極快"),M=m("確認"),$=m("重寫"),A=m("上一步"),F={key:2,class:"thirdStep"},E={class:"row"},j={class:"setting"},z={class:"audio"},B={class:"word"},Y={class:"row marginTop"},K=m("DEMO"),N=m("確認"),O=m("上一步"),R={key:3,class:"fourStep"},q=m("回到個人頁面");a();const P=_(((e,a,c,p,P,G)=>{const H=t("el-header"),J=t("el-button"),L=t("el-input"),Z=t("el-col"),Q=t("el-row"),W=t("el-card"),X=t("el-skeleton"),ee=t("el-form-item"),ae=t("el-radio-button"),te=t("el-radio-group"),le=t("el-slider"),ie=t("el-form"),se=t("el-color-picker"),ue=t("el-option"),oe=t("el-option-group"),de=t("el-select"),re=t("playboard"),ne=t("el-drawer"),me=t("el-result"),ce=t("el-main"),pe=t("el-step"),_e=t("el-steps");return l(),i("div",g,[s(H),s(ce,null,{default:_((()=>[0==P.active?(l(),i("div",h,[f,s(L,{class:"marginTop",modelValue:P.searchValue,"onUpdate:modelValue":a[2]||(a[2]=e=>P.searchValue=e),placeholder:"請輸入youtube網址",onKeyup:a[3]||(a[3]=u((e=>G.search(P.searchValue)),["enter"]))},{append:_((()=>[s(J,{onClick:a[1]||(a[1]=e=>G.search(P.searchValue)),icon:"el-icon-search",circle:""})])),_:1},8,["modelValue"]),P.music_data.youtube_id.length>0?(l(),i("div",y,[s(Q,{justify:"cetnter"},{default:_((()=>[s(Z,null,{default:_((()=>[s(W,{shadow:"hover","body-style":{padding:"8px"}},{default:_((()=>[s(Q,{justify:"space-around",gutter:8},{default:_((()=>[s(Z,{span:24,sm:6,lg:4},{default:_((()=>[s("div",b,[s("img",{src:P.music_data.img_src},null,8,["src"])])])),_:1}),s(Z,{span:24,sm:18,lg:20},{default:_((()=>[s("h4",v,"歌名: "+o(P.music_data.origin_song),1),s("h4",V,"頻道: "+o(P.music_data.producer),1),s("h4",k,"時間: "+o(G.getTimeString),1)])),_:1})])),_:1})])),_:1})])),_:1}),s(Z,null,{default:_((()=>[s(J,{class:"marginTop",type:"primary",onClick:a[4]||(a[4]=e=>G.selectVideo())},{default:_((()=>[w])),_:1})])),_:1})])),_:1})])):(l(),i(X,{key:1,class:"marginTop",rows:5,animated:""}))])):d("",!0),1==P.active?(l(),i(ie,{key:1,class:"secondStep",model:P.music_data,rules:P.rules,ref:"map_data","label-width":"100px"},{default:_((()=>[S,s("div",U,[s("iframe",{type:"text/html",width:"100%",height:"100%",src:P.music_data.video_url,frameborder:"0"},null,8,["src"])]),s(ee,{class:"marginTop",label:"標題",prop:"title"},{default:_((()=>[s(L,{modelValue:P.music_data.title,"onUpdate:modelValue":a[5]||(a[5]=e=>P.music_data.title=e)},null,8,["modelValue"])])),_:1}),s(ee,{label:"作者",prop:"mapper"},{default:_((()=>[s(L,{modelValue:P.music_data.mapper,"onUpdate:modelValue":a[6]||(a[6]=e=>P.music_data.mapper=e)},null,8,["modelValue"])])),_:1}),s(ee,{label:"節奏速度",prop:"bpm"},{default:_((()=>[s(te,{modelValue:P.music_data.bpm,"onUpdate:modelValue":a[7]||(a[7]=e=>P.music_data.bpm=e)},{default:_((()=>[s(ae,{label:.25},{default:_((()=>[x])),_:1},8,["label"]),s(ae,{label:.5},{default:_((()=>[T])),_:1},8,["label"]),s(ae,{label:1},{default:_((()=>[C])),_:1}),s(ae,{label:1.5},{default:_((()=>[I])),_:1},8,["label"]),s(ae,{label:2},{default:_((()=>[D])),_:1})])),_:1},8,["modelValue"])])),_:1}),s(ee,{label:"鍵位數量",prop:"key_count"},{default:_((()=>[s(le,{modelValue:P.music_data.key_count,"onUpdate:modelValue":a[8]||(a[8]=e=>P.music_data.key_count=e),height:"300",min:1,max:7},null,8,["modelValue"])])),_:1}),s(ee,null,{default:_((()=>[s(J,{type:"primary",onClick:a[9]||(a[9]=e=>G.submitForm("map_data"))},{default:_((()=>[M])),_:1}),s(J,{onClick:a[10]||(a[10]=e=>G.resetForm("map_data"))},{default:_((()=>[$])),_:1}),s(J,{type:"danger",onClick:a[11]||(a[11]=e=>G.previous())},{default:_((()=>[A])),_:1})])),_:1})])),_:1},8,["model","rules"])):d("",!0),2==P.active?(l(),i("div",F,[s("div",E,[(l(!0),i(r,null,n(P.music_data.map_data,((e,a)=>(l(),i("div",{class:"col",key:a},[s("h1",null,o(a)+"號位",1),s(J,{class:"button shadow",style:G.getButtonStyle(e.color),size:"medium"},{default:_((()=>[m(o(e.key),1)])),_:2},1032,["style"]),s("div",j,[s(L,{maxlength:"1",onInput:e=>G.edit(e,a),placeholder:"英文/數字"},{append:_((()=>[s(se,{modelValue:e.color,"onUpdate:modelValue":a=>e.color=a,size:"mini"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["onInput"]),s("div",z,[s(de,{class:"select",modelValue:e.audio,"onUpdate:modelValue":a=>e.audio=a},{default:_((()=>[(l(!0),i(r,null,n(P.audio,(e=>(l(),i(oe,{key:e.label,label:e.label},{default:_((()=>[(l(!0),i(r,null,n(e.options,(e=>(l(),i(ue,{key:e,value:e},null,8,["value"])))),128))])),_:2},1032,["label"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"]),s("div",B,[s(J,{onClick:a=>G.playAudio(e.audio),icon:"el-icon-video-play"},null,8,["onClick"])])])])])))),128))]),s("div",Y,[s(J,{onClick:a[13]||(a[13]=e=>P.drawer=!0),type:"success"},{default:_((()=>[K,s(ne,{title:"DEMO",modelValue:P.drawer,"onUpdate:modelValue":a[12]||(a[12]=e=>P.drawer=e),size:"60%"},{default:_((()=>[(P.drawer=!0)?(l(),i(re,{key:0,music_data:P.music_data},null,8,["music_data"])):d("",!0)])),_:1},8,["modelValue"])])),_:1}),s(J,{type:"primary",onClick:a[14]||(a[14]=e=>G.confirm())},{default:_((()=>[N])),_:1}),s(J,{type:"danger",onClick:a[15]||(a[15]=e=>G.previous())},{default:_((()=>[O])),_:1})])])):d("",!0),3==P.active?(l(),i("div",R,[s(me,{icon:"success",title:"成功提示",subtitle:"请根据提示进行操作"},{extra:_((()=>[s(J,{type:"primary",size:"medium",onClick:a[16]||(a[16]=e=>G.leave())},{default:_((()=>[q])),_:1})])),_:1})])):d("",!0)])),_:1}),s(_e,{active:P.active,"align-center":"","finish-status":"success"},{default:_((()=>[s(pe,{title:"找到Youtube音樂"}),s(pe,{title:"輸入你的歌曲資訊"}),s(pe,{title:"編輯預設個人設定"})])),_:1},8,["active"])])}));const G={data:()=>({drawer:!1,active:0,searchValue:"",audio:[{options:["mute"]},{label:"樂器",options:["pianoC","pianoD","pianoE","pianoF","pianoG","pianoA","pianoB","drum","small_drum","Japanese_drum"]},{label:"其他",options:["cracker","laser","stabbing","short_punch","sh_pickup","pushing_a_key","cat_like"]}],music_data:{title:null,mapper:null,mapper_id:null,bpm:1,duration:0,key_count:7,difficulty:1.5,origin_song:"",youtube_id:"",video_url:"",img_src:"",producer:"",love_count:0,play_count:0,view_count:0,map_data:null},rules:{title:[{required:!0,message:"請輸入標題",trigger:"blur"},{min:1,max:200,message:"長度請控制在200個字以內",trigger:"blur"}],mapper:[{required:!0,message:"作者不能為空",trigger:"blur"},{min:1,max:30,message:"長度請控制在30個字以內",trigger:"blur"}]}}),computed:{getMapSetting(){return this.$store.getters.getMapSetting[this.music_data.key_count-1]},getTimeString(){let e=parseInt(this.music_data.duration/60),a=parseInt(this.music_data.duration%60);return a<10&&(a="0"+a),e+"分"+a+"秒"},getVolum(){return this.$store.getters.getVolum},getUser(){return this.$store.getters.getUser}},methods:{edit(e,a){let t=!1;this.music_data.map_data.map((a=>{a.key==e&&(t=!0)})),/[a-z]|[A-Z]|[0-9]/.test(e)&&!t&&(this.music_data.map_data[a].key=e)},getButtonStyle:e=>({background:e}),search(e){this.getInfo(this.getYoutubeID(e))},getYoutubeID:e=>e.split("?v=")[1],getDuration(e){var a=/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/,t=0,l=0,i=0;if(a.exec(e)){var s=a.exec(e);return s[1]&&(t=Number(s[1])),s[2]&&(l=Number(s[2])),s[3]&&(i=Number(s[3])),3600*t+60*l+i}},getInfo(e){const a=window.gapi.client.youtube.videos.list({part:["snippet,contentDetails,statistics"],id:e});let t=this;a.execute((function(e){e.items.map((e=>{try{e.id.playlistId||(t.music_data.youtube_id=e.id,t.music_data.origin_song=e.snippet.title,t.music_data.producer=e.snippet.channelTitle,t.music_data.duration=t.getDuration(e.contentDetails.duration),t.music_data.video_url="https://www.youtube.com/embed/"+e.id,t.music_data.img_src="http://img.youtube.com/vi/"+e.id+"/0.jpg",t.music_data.mapper=t.getUser.name,t.music_data.mapper_id=t.getUser.id)}catch(a){console.log(a)}}))}))},submitForm(e){this.$refs[e].validate((e=>{if(!e)return!1;this.next(),this.applySetting()}))},applySetting(){this.music_data.map_data=this.getMapSetting,this.setRandomSlider()},openDrawer(){this.drawer=!0},setRandomSlider(){this.music_data.map_data.forEach((e=>{if(0===e.timeStamp.length)for(let a=0;a<5;a++)e.timeStamp.push(10*Math.random());e.timeStamp.sort()}))},resetForm(e){this.$refs[e].resetFields()},playAudio(e){if("mute"!==e){let a=new Audio;a.volume=this.getVolum,a.src="./audio/"+e+".mp3",a.play()}},selectVideo(){this.music_data.title=this.music_data.origin_song+" from "+this.music_data.mapper,this.next()},next(){this.active++},previous(){this.active--},confirm(){this.axios.post({}.VITE_BACK_URL+"/data",["music_data",this.music_data]).then((e=>{console.log(e.data),this.next(),this.$notify({title:"Map Data",message:p("i",{style:"color: teal"},"已經創建一則音樂")})})).catch((e=>{this.$notify({title:"Map Data",message:p("i",{style:"color: teal"},"發生錯誤")}),console.log(e)}))},leave(){this.$router.push({name:"User"})}},mounted(){gapi.client.load("youtube","v3"),gapi.client.setApiKey({}.VITE_YOUTUBE_API)}};G.render=P,G.__scopeId="data-v-cf00609a";export{G as default};
