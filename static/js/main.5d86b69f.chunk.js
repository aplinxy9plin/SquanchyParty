(this.webpackJsonpsquanchyparty=this.webpackJsonpsquanchyparty||[]).push([[0],{186:function(e,t,a){e.exports=a(289)},289:function(e,t,a){"use strict";a.r(t);a(187),a(214),a(216),a(217),a(219),a(220),a(221),a(222),a(223),a(224),a(225),a(226),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(235),a(236),a(237),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256);var n=a(0),r=a.n(n),o=a(26),c=a.n(o),i=a(35),s=a(36),l=a(38),u=a(37),p=a(39),h=a(75),m=a.n(h),d=a(124),f=a.n(d),y=a(125),b=a.n(y),g=a(74),E=a.n(g),j=(a(264),a(16)),k=a(114),v=a.n(k),O=(a(98),a(115)),w=a.n(O),x=a(116),S=a.n(x),_=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.state.tusa_data;return r.a.createElement(j.i,{id:this.props.id},r.a.createElement(j.j,null,"\ud83e\udd5aParty Playlist \ud83e\udd5a"),r.a.createElement(j.e,{title:t&&t.name},t&&r.a.createElement(j.c,null,"\u0412\u044b\u0431\u0440\u0430\u043d\u044b: ",t.users.map((function(e){return e.first_name+(null!==e.last_name?" "+e.last_name:"")})).join(", "))),r.a.createElement(j.h,null,this.props.state.tracks&&this.props.state.tracks.map((function(t,a){return r.a.createElement(j.a,{key:a,id:a,before:t.play_now?r.a.createElement(S.a,{fill:"#fff"}):r.a.createElement(w.a,{fill:"#fff"}),onClick:e.props.play},t.track_name+(t.artist.length>0?" - "+t.artist.map((function(e){return e.name})).join(", "):""))}))),r.a.createElement("div",{className:"play_btn"},r.a.createElement("a",{href:"#do_sexy",onClick:this.props.choose,style:{textDecoration:"none"}},r.a.createElement("span",{role:"img","aria-label":"yea","aria-labelledby":"yea",style:{fontSize:"50px",marginLeft:"25px"}},"\ud83c\udf89"))),r.a.createElement(v.a,{src:this.props.state.now_stream,id:"audio",onEnded:this.props.nextSong}))}}]),t}(r.a.Component),C=a(117),D=a(45),P=a(44),B=a(120),q=a(126),I=a(119),M=a.n(I),T=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.i,a=e.x,n=e.y,o=e.rot,c=e.scale,i=e.trans,s=e.bind,l=e.data[t],u=l.name,p=l.age,h=l.distance,m=l.text,d=l.pics;return r.a.createElement(P.a.div,{key:t,style:{transform:Object(P.b)([a,n],(function(e,t){return"translate3d(".concat(e,"px,").concat(t,"px,0)")}))}},r.a.createElement(P.a.div,Object.assign({},s(t),{style:{transform:Object(P.b)([o,c],i)}}),r.a.createElement("div",{className:"card"},r.a.createElement(q.a,null,d.map((function(e,t){return r.a.createElement("img",{src:e,key:t,alt:"profilePicture"})}))),r.a.createElement("h2",null,u,","),r.a.createElement("h2",null,p),r.a.createElement("h5",null,h),r.a.createElement("h5",null,m),r.a.createElement(M.a,{size:"xl",component:"a",href:"https://teleg.run/APogozhev"},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432 \u0435\u0431\u0430\u043b\u043e"))))}}]),t}(r.a.Component),z=[{pics:["https://images.unsplash.com/photo-1520024146169-3240400354ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"],name:"Heather",age:32,distance:"4 miles away",text:"My nickname is Gilette because I'm the best a man can get. Also I will cut you."},{pics:["https://images.unsplash.com/photo-1522263842439-347f062b8475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"],name:"Chloe",age:18,distance:"1 mile away",text:"The C and the L are silent."},{pics:["https://images.unsplash.com/photo-1539758462369-43adaa19bc1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"],name:"Helen",age:19,distance:"3 miles away",text:"Aspiring MILF"},{pics:["https://images.unsplash.com/photo-1514924801778-1db0aba75e9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"],name:"Savannah",age:29,distance:"3 miles away",text:"A little known fact is that I cover about 40% of Africa."},{pics:["https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1532635270-c09dac425ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"],name:"Jane",age:22,distance:"2 miles away",text:"On the first date I will carve our initials in a tree. It's the most romantic way to let you know I have a knife."}];function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var N=function(e){return{x:0,y:-10*e,scale:1,rot:20*Math.random()-10,delay:100*e}},H=function(e){return{rot:0,scale:1.5,y:-1e3}},L=function(e,t){return"perspective(1500px) rotateX(30deg) rotateY(".concat(e/10,"deg) rotateZ(").concat(e,"deg) scale(").concat(t,")")};var A=function(){var e=Object(n.useState)((function(){return new Set})),t=Object(D.a)(e,1)[0],a=Object(P.c)(z.length,(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(a,!0).forEach((function(t){Object(C.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},N(e),{from:H(e)})})),o=Object(D.a)(a,2),c=o[0],i=o[1],s=Object(B.a)((function(e){var a=Object(D.a)(e.args,1)[0],n=e.down,r=Object(D.a)(e.delta,1)[0],o=(e.distance,Object(D.a)(e.direction,1)[0]),c=e.velocity,s=o<0?-1:1;!n&&c>.2&&t.add(a),i((function(e){if(a===e){var o=t.has(a);return{x:o?(200+window.innerWidth)*s:n?r:0,rot:r/100+(o?10*s*c:0),scale:n?1.1:1,delay:void 0,config:{friction:50,tension:n?800:o?200:500}}}})),n||t.size!==z.length||setTimeout((function(){return t.clear()||i((function(e){return N(e)}))}),600)}));return r.a.createElement("div",{className:"tinder"},r.a.createElement("center",null,r.a.createElement("h1",{style:{position:"absolute"}},"\u0412\u0430\u0448\u0438 \u043c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u0432\u043a\u0443\u0441\u044b \u0441\u043e\u0432\u043f\u0430\u043b\u0438!")),c.map((function(e,t){var a=e.x,n=e.y,o=e.rot,c=e.scale;return r.a.createElement(T,{key:t,i:t,x:a,y:n,rot:o,scale:c,trans:L,data:z,bind:s})})))},W=a(57),Q=a(58),G=a.n(Q),F=a(121),R=a.n(F),U=Object(j.m)(),X=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={search:""},a.onChange=a.onChange.bind(Object(W.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"onChange",value:function(e){this.setState({search:e})}},{key:"render",value:function(){var e=this;return r.a.createElement(j.i,{id:this.props.id},r.a.createElement(j.j,{left:r.a.createElement(j.f,{onClick:function(){e.props.choose()}},U===j.g?r.a.createElement(R.a,null):r.a.createElement(G.a,null))},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0434\u0440\u0443\u0437\u0435\u0439"),r.a.createElement(j.l,{value:this.state.search,onChange:this.onChange}),r.a.createElement(j.d,null,this.users.length>0&&this.users.map((function(t,a){return r.a.createElement(j.b,{style:{color:"white"},onChange:e.props.onChoose,id:a,checked:t.check,key:t.id},r.a.createElement("b",null,t.username))}))))}},{key:"users",get:function(){var e=this.state.search.toLowerCase();return this.props.state.users.filter((function(t){return t.username.toLowerCase().indexOf(e)>-1}))}}]),t}(r.a.Component),Y=a(122),Z=a.n(Y),K=a(123),V=a.n(K),$=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onChoose=function(e){var t=a.state.users;t[Number(e.currentTarget.id)].check=!t[Number(e.currentTarget.id)].check,a.setState({users:t})},a.go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.popout=function(e){a.setState({popout:e})},a.onStoryChange=function(e){a.setState({activeStory:e.currentTarget.dataset.story,activePanel:"home"})},a.choose=function(){a.setState({tracks:function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e}(a.state.tracks)})},a.play=function(e){a.setState({tracks:a.state.tracks.map((function(t,n){return document.getElementById("audio").pause(),n===Number(e.currentTarget.id)?(t.play_now=!t.play_now,t.play_now?a.getMusic(t.track_name+" "+t.artist.map((function(e){return e.name})).join(", "),n):document.getElementById("audio").pause()):t.play_now=!1,t}))})},a.getMusic=function(e,t){fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q="+e,{method:"GET",headers:{"x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com","x-rapidapi-key":"9608457de2msh39bd68eedabbaa1p1ab241jsn577c4aa2aac8"}}).then((function(e){return e.json()})).then((function(e){a.setState({now_stream:e.data[0].preview,index_song:t}),document.getElementById("audio").play()})).catch((function(e){console.log(e)}))},a.nextSong=function(){a.state.tracks.length-1<a.state.index_song+1?a.setState({tracks:a.state.tracks.map((function(e){return e.play_now=!1,e}))}):a.setState({tracks:a.state.tracks.map((function(e,t){return document.getElementById("audio").pause(),t===Number(a.state.index_song+1)?(e.play_now=!e.play_now,e.play_now?a.getMusic(e.track_name+" "+e.artist.map((function(e){return e.name})).join(", "),a.state.index_song+1):document.getElementById("audio").pause()):e.play_now=!1,e}))})},a.state={list:[],activeStory:"party",activePanel:"home",users:[],now_stream:"",link_index:0,links:["https://squanchymusic-parser.herokuapp.com/get_info?link=https://music.apple.com/ru/playlist/%D0%B4%D1%80%D0%B0%D0%BC-%D0%BD-%D0%B1%D1%8D%D0%B9%D1%81/pl.7a75d4e444fb4b3583ec9d48a2b0eef6","https://squanchymusic-parser.herokuapp.com/get_info?link=https://music.yandex.ru/users/aplinnikita/playlists/3"],popout:r.a.createElement(j.k,null)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new URLSearchParams(window.location.search).get("group_id");t&&fetch("https://squanchymusic-backend.herokuapp.com/squanchy/groups/generate_playlist/?group_id=".concat(t,"&platform=telegram"),{method:"GET",headers:{authorization:"Token b45ae4cecf894c51e45a624c5cad2e8349404c2b"}}).then((function(e){return e.json()})).then((function(t){return e.setState({tusa_data:t,tracks:t.tracks,popout:null})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(f.a,{activeStory:this.state.activeStory,tabbar:r.a.createElement(b.a,null,r.a.createElement(E.a,{onClick:this.onStoryChange,selected:"party"===this.state.activeStory,"data-story":"party",text:"\u041f\u0410\u0422\u0418\u0425\u0410\u0420\u0414"},r.a.createElement(V.a,null)),r.a.createElement(E.a,{onClick:this.onStoryChange,selected:"tinder"===this.state.activeStory,"data-story":"tinder",text:"\u0422\u0438\u043d\u0434\u0435\u0440"},r.a.createElement(Z.a,null)))},r.a.createElement(m.a,{id:"tinder",activePanel:this.state.activePanel},r.a.createElement(A,{id:"home",go:this.go,state:this.state,play:this.play,nextSong:this.nextSong,choose:this.choose})),r.a.createElement(m.a,{id:"party",activePanel:this.state.activePanel,popout:this.state.popout},r.a.createElement(_,{id:"home",go:this.go,state:this.state,play:this.play,nextSong:this.nextSong,choose:this.choose}),r.a.createElement(X,{id:"find",go:this.go,state:this.state,choose:this.choose,onChoose:this.onChoose})))}}]),t}(n.Component);c.a.render(r.a.createElement($,null),document.getElementById("root"))},98:function(e,t,a){}},[[186,1,2]]]);
//# sourceMappingURL=main.5d86b69f.chunk.js.map