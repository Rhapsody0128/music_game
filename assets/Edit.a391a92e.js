import{p as t,h as a,r as e,o as i,c as o,a as s,i as c}from"./vendor.db1e1251.js";const u=c();t("data-v-07faacd6");const d={id:"Edit"};a();const r=u(((t,a,c,r,l,n)=>{const m=e("el-header"),p=e("editboard"),g=e("el-col"),b=e("el-row");return i(),o("div",d,[s(m),s(b,{justify:"center"},{default:u((()=>[s(g,{xl:16,lg:20,md:24},{default:u((()=>[s(p,{musicData:l.musicData},null,8,["musicData"])])),_:1})])),_:1})])}));const l={data:()=>({url:"",musicData:{id:"EjlMPu5sEgw",title:"",url:"",mapper:"",src:"",originSong:"",producer:"",difficulty:"",bpm:1,duration:200,satisfaction:null,playCount:null,viewCount:null,mapData:[{key:"a",color:"rgb(200,10,15)",timeStamp:[.3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]},{key:"s",color:"rgb(0,10,15)",timeStamp:[.3,.8,.9,1.2,1.45]},{key:"d",color:"rgba(0,0,0,0.5)",timeStamp:[.3,.8,.9,1.2,1.45]},{key:"f",color:"rgba(255,255,255,1)",timeStamp:[.3,.8,.9,1.2,1.45]}]}}),methods:{getInfo(){const t=window.gapi.client.youtube.videos.list({part:["snippet,contentDetails,statistics"],id:this.id}),a=this;t.execute((function(t){console.log(t),t.items.map((t=>{try{t.id.playlistId||(a.musicData.id=t.id,a.musicData.originSong=t.snippet.title,a.musicData.url="https://www.youtube.com/embed/"+t.id,a.musicData.producer=t.snippet.channelTitle,a.musicData.src="http://img.youtube.com/vi/"+t.id+"/0.jpg")}catch(e){console.log(e)}}))}))}},computed:{duration(){var t=/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/,a=0,e=0,i=0;if(t.exec("PT15M33S")){var o=t.exec("PT15M33S");return o[1]&&(a=Number(o[1])),o[2]&&(e=Number(o[2])),o[3]&&(i=Number(o[3])),3600*a+60*e+i}}},mounted(){gapi.client.load("youtube","v3"),gapi.client.setApiKey({}.VITE_YOUTUBE_API)}};l.render=r,l.__scopeId="data-v-07faacd6";export{l as default};