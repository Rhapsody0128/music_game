import{p as t,g as a,r as i,o as e,c as o,a as c,h as d}from"./vendor.edb56429.js";const u=d();t("data-v-36bc1e30");const r={id:"Edit"};a();const s=u(((t,a,d,s,n,p)=>{const m=i("el-header"),l=i("playboard"),g=i("el-col"),b=i("el-row");return e(),o("div",r,[c(m),c(b,{justify:"center"},{default:u((()=>[c(g,{xl:16,lg:20,md:24},{default:u((()=>[c(l,{music_data:n.musicData},null,8,["music_data"])])),_:1})])),_:1})])}));const n={data:()=>({musicData:{title:"a",mapper:"z",bpm:1,duration:200,difficulty:1.5,origin_song:"f",youtube_id:"VyvhvlYvRnc",video_url:"a",img_src:"c",producer:"d",love_count:0,play_count:0,view_count:0,map_data:[{key:"A",color:"rgb(200,10,15)",audio:"pianoA",timeStamp:[.3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]},{key:"s",color:"rgb(0,10,15)",audio:"pianoB",timeStamp:[.3,.8,.9,1.2,1.45]},{key:"d",color:"rgba(0,0,0,0.5)",audio:"pianoC",timeStamp:[.3,.8,.9,1.2,1.45]},{key:"f",color:"rgba(255,255,255,1)",audio:"pianoD",timeStamp:[.3,.8,.9,1.2,1.45]},{key:"4",color:"rgba(200,10,10,0.5)",audio:"pianoE",timeStamp:[.3,.8,.9,1.2,1.45]},{key:"5",color:"rgba(200,200,10,0.5)",audio:"pianoF",timeStamp:[.3,.8,.9,1.2,1.45]},{key:"6",color:"rgba(200,200,200,0.5)",audio:"pianoG",timeStamp:[.3,.8,.9,1.2,1.45,.3,.8,.9,1.2,1.45]}]}}),methods:{getInfo(){const t=window.gapi.client.youtube.videos.list({part:["snippet,contentDetails,statistics"],id:this.id}),a=this;t.execute((function(t){console.log(t),t.items.map((t=>{try{t.id.playlistId||(a.musicData.id=t.id,a.musicData.originSong=t.snippet.title,a.musicData.url="https://www.youtube.com/embed/"+t.id,a.musicData.producer=t.snippet.channelTitle,a.musicData.src="http://img.youtube.com/vi/"+t.id+"/0.jpg")}catch(i){console.log(i)}}))}))}},computed:{duration(){var t=/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/,a=0,i=0,e=0;if(t.exec("PT15M33S")){var o=t.exec("PT15M33S");return o[1]&&(a=Number(o[1])),o[2]&&(i=Number(o[2])),o[3]&&(e=Number(o[3])),3600*a+60*i+e}}},mounted(){gapi.client.load("youtube","v3"),gapi.client.setApiKey({}.VITE_YOUTUBE_API)}};n.render=s,n.__scopeId="data-v-36bc1e30";export{n as default};