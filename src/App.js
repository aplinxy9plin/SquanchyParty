import React, { Component } from 'react'

import View from '@vkontakte/vkui/dist/components/View/View';
import Epic from '@vkontakte/vkui/dist/components/Epic/Epic';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';

import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home'
import Tinder from './panels/Tinder'
import Find from './panels/Find'
import { ScreenSpinner } from '@vkontakte/vkui';

import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed'
import Icon28Music from '@vkontakte/icons/dist/28/music';

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			activeStory: "party",
			activePanel: "home",
			users: [],
			now_stream: "",
			link_index: 0,
			links: ["https://squanchymusic-parser.herokuapp.com/get_info?link=https://music.apple.com/ru/playlist/%D0%B4%D1%80%D0%B0%D0%BC-%D0%BD-%D0%B1%D1%8D%D0%B9%D1%81/pl.7a75d4e444fb4b3583ec9d48a2b0eef6", "https://squanchymusic-parser.herokuapp.com/get_info?link=https://music.yandex.ru/users/aplinnikita/playlists/3"],
			popout: <ScreenSpinner />,
			disabled_tinder: true,
			disabled_party: true
		}
	}

	componentDidMount() {
		var urlParams1 = new URLSearchParams(window.location.search);
		var group_id = urlParams1.get('group_id');
		var user_id = urlParams1.get('user_id');
		if(group_id){
			fetch(`https://squanchymusic-backend.herokuapp.com/squanchy/groups/generate_playlist/?group_id=${group_id}&platform=telegram`, {
			  "method": "GET",
			  "headers": {
			    "authorization": "Token b45ae4cecf894c51e45a624c5cad2e8349404c2b"
			  }
			})
			.then(response => response.json())
			.then(tusa_data => this.setState({tusa_data, disabled_party: false, tracks: tusa_data.tracks, popout: null}))
			.catch(err => {
			  console.log(err);
			});
		}else if(user_id){
			fetch(`https://squanchymusic-backend.herokuapp.com/squanchy/users/find_similar/?user_id=${user_id}`, {
			  "method": "GET",
			  "headers": {
			    "authorization": "Token b45ae4cecf894c51e45a624c5cad2e8349404c2b"
			  }
			})
			.then(response => response.json())
			.then(matches => this.setState({matches: matches.filter((item) => item.username).map((item) => {
				return {
					name: item.first_name + (item.last_name ? (" " +item.last_name) : ""),
					lang: item.language_code,
					pics: ["https://mysterious-plateau-80675.herokuapp.com/telega_ava.php?img="+item.username],
					username: item.username
				}
			}), disabled_tinder: false, activeStory: "tinder", popout: null}))
			.catch(err => {
			  console.log(err);
			});
		}
		// fetch("https://squanchymusic-backend.herokuapp.com/users/", {
		//   "method": "GET",
		//   "headers": {
		// 	"authorization": "Token b45ae4cecf894c51e45a624c5cad2e8349404c2b"
		//   }
		// })
		// .then(response => response.json())
		// .then(data => this.setState({
		// 	users: data.filter((item) => item.username),
		// 	popout: null
		// }))
		// .catch(err => {
		//   console.log(err);
		// });
	}

	onChoose = e => {
		var users = this.state.users
		users[Number(e.currentTarget.id)].check = !users[Number(e.currentTarget.id)].check
		this.setState({users})
	}

	go = e => {
		this.setState({activePanel: e.currentTarget.dataset.to});
	};

	popout = popout => {
		this.setState({popout})
	}

	onStoryChange = e => {
		this.setState({activeStory: e.currentTarget.dataset.story, activePanel: "home"})
	}

	choose = ( ) => {
		function shuffle(array) {
			var currentIndex = array.length, temporaryValue, randomIndex;
			
			// While there remain elements to shuffle...
			while (0 !== currentIndex) {
			
			  // Pick a remaining element...
			  randomIndex = Math.floor(Math.random() * currentIndex);
			  currentIndex -= 1;
			
			  // And swap it with the current element.
			  temporaryValue = array[currentIndex];
			  array[currentIndex] = array[randomIndex];
			  array[randomIndex] = temporaryValue;
			}
			
			return array;
		}
		this.setState({tracks: shuffle(this.state.tracks)})
		// if(this.state.users.filter((item) => item.check).length > 0){
			// var self = this;
			// this.setState({popout: <ScreenSpinner />, activePanel: "home"})
			// setTimeout(() => {
			// 	self.setState({popout: null})
			// }, 2000);
			// fetch(this.state.links[this.state.link_index])
			// .then(response => response.json())
			// .then(data => {
			// 	var tracks = data.map((item) => {
			// 		return {name: item.track_name + " " + item.artist[0].name}
			// 	});
			// 	this.setState({popout: null, tracks, link_index: this.state.link_index === 0 ? 1 : 0})
			// })
			// .catch(err => {
			// 	console.log(err);
			// })
		// }else{
		// 	this.setState({activePanel: "home"})
		// }
	}

	play = e => {
		this.setState({
			tracks: this.state.tracks.map((item, index) => {
				document.getElementById('audio').pause();
				if(index === Number(e.currentTarget.id)){
					item.play_now = !item.play_now
					if(item.play_now){
						this.getMusic(item.track_name + " " + item.artist.map((art) => art.name).join(", "), index)
					}else{
						// this.getMusic(item.name)
						document.getElementById('audio').pause();
					}
				}else{
					item.play_now = false
				}
				return item
			})
		})
	}

	getMusic = (song_name, index_song) => {
		fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q="+song_name, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
				"x-rapidapi-key": "9608457de2msh39bd68eedabbaa1p1ab241jsn577c4aa2aac8"
			}
		})
		.then(response => response.json())
		.then(data => {
			this.setState({now_stream: data.data[0].preview, index_song})
			document.getElementById('audio').play();
		})
		.catch(err => {
			console.log(err);
		});
	}

	nextSong = ( ) => {
		if(this.state.tracks.length-1 < this.state.index_song+1){
			this.setState({
				tracks: this.state.tracks.map((item) => {
					item.play_now = false
					return item
				})
			})
		}else{
			this.setState({
				tracks: this.state.tracks.map((item, index) => {
					document.getElementById('audio').pause();
					if(index === Number(this.state.index_song+1)){
						item.play_now = !item.play_now
						if(item.play_now){
							this.getMusic(item.track_name + " " + item.artist.map((art) => art.name).join(", "), this.state.index_song+1)
						}else{
							document.getElementById('audio').pause();
						}
					}else{
						item.play_now = false
					}
					return item
				})
			})
		}
	}
	
	render() {
		return(
			<Epic activeStory={this.state.activeStory} tabbar={
				<Tabbar>
					{!this.state.disabled_party && <TabbarItem
					onClick={this.onStoryChange}
					selected={this.state.activeStory === 'party'}
					data-story="party"
					text="ПАТИХАРД"
				  ><Icon28Music /></TabbarItem>}
				  {!this.state.disabled_tinder && <TabbarItem
				  	disableds
					onClick={this.onStoryChange}
					selected={this.state.activeStory === 'tinder'}
					data-story="tinder"
					text="Тиндер"
				  ><Icon28Newsfeed /></TabbarItem>}
				</Tabbar>
			}>
				<View id="tinder" activePanel={this.state.activePanel}>
					<Tinder id="home" go={this.go} state={this.state} play={this.play} nextSong={this.nextSong} choose={this.choose} />
				</View>
				<View id="party" activePanel={this.state.activePanel} popout={this.state.popout}>
					<Home id="home" go={this.go} state={this.state} play={this.play} nextSong={this.nextSong} choose={this.choose} />
					<Find id="find" go={this.go} state={this.state} choose={this.choose} onChoose={this.onChoose} />
				</View>
			</Epic>
		)
	}
}

export default App