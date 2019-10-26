import React, { Component } from 'react'

import View from '@vkontakte/vkui/dist/components/View/View';

import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home'
import Find from './panels/Find'
import { ScreenSpinner } from '@vkontakte/vkui';

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			activePanel: "home",
			users: [
				{
				  id: 2281337,
				  name: "aplinxy9plin",
				  check: false
				},
				{
				  id: 1234,
				  name: "pogozhev",
				  check: false
				},
				{
				  id: 653463,
				  name: "okhlopkov",
				  check: false
				}
			],
			now_stream: "",
			link_index: 0,
			links: ["https://squanchymusic-parser.herokuapp.com/get_info?link=https://music.apple.com/ru/playlist/%D0%B4%D1%80%D0%B0%D0%BC-%D0%BD-%D0%B1%D1%8D%D0%B9%D1%81/pl.7a75d4e444fb4b3583ec9d48a2b0eef6", "https://squanchymusic-parser.herokuapp.com/get_info?link=https://music.yandex.ru/users/aplinnikita/playlists/3"]
		}
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
		var self = this;
		this.setState({popout: <ScreenSpinner />, activePanel: "home"})
		setTimeout(() => {
			self.setState({popout: null})
		}, 2000);
		fetch(this.state.links[this.state.link_index])
		.then(response => response.json())
		.then(data => {
			var tracks = data.map((item) => {
				return {name: item.track_name + " " + item.artist[0].name}
			});
			this.setState({popout: null, tracks, link_index: this.state.link_index === 0 ? 1 : 0})
		})
		.catch(err => {
			console.log(err);
		})
	}

	play = e => {
		this.setState({
			tracks: this.state.tracks.map((item, index) => {
				document.getElementById('audio').pause();
				if(index === Number(e.currentTarget.id)){
					item.play_now = !item.play_now
					if(item.play_now){
						this.getMusic(item.name, index)
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
							this.getMusic(item.name, this.state.index_song+1)
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
			<View activePanel={this.state.activePanel} popout={this.state.popout}>
				<Home id="home" go={this.go} state={this.state} play={this.play} nextSong={this.nextSong} choose={this.choose} />
				<Find id="find" go={this.go} state={this.state} choose={this.choose} onChoose={this.onChoose} />
			</View>
		)
	}
}

export default App