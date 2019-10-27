import React from 'react';
import { Panel, PanelHeader, Cell, List, Div, Group } from '@vkontakte/vkui';
import ReactAudioPlayer from 'react-audio-player';

import './index.css'

import Icon28Play from '@vkontakte/icons/dist/28/play';
import Icon28Pause from '@vkontakte/icons/dist/28/pause';

class Home extends React.Component {	
  render(){
    let {tusa_data} = this.props.state;
		return(
			<Panel id={this.props.id}>
				<PanelHeader>🥚Party Playlist 🥚</PanelHeader>
                <Group title={tusa_data && tusa_data.name}>
                    {/* <Div>
                        В группе: @aplinxy9plin, @loxTypoY, @sasha
                    </Div> */}
                    {
                        tusa_data && <Div>
                            Выбраны: {tusa_data.users.map((item) => item.first_name + (item.last_name !== null ? (" " + item.last_name) : "")).join(", ")}
                        </Div>
                    }
                    {/* <Div>
                        <Button size="xl" color="primary" onClick={this.props.go} data-to="find">Выбрать друзей</Button>
                    </Div> */}
                </Group>
                <List>
                    {
                        this.props.state.tracks && this.props.state.tracks.map((item, index) => 
                            <Cell
                                key={index}
                                id={index}
                                before={item.play_now ? <Icon28Pause fill="#fff" /> : <Icon28Play fill="#fff" />}
                                onClick={this.props.play}
                            >{item.track_name + (item.artist.length > 0 ? ( " - " + item.artist.map((art) => art.name).join(", ")) : "")}</Cell>
                        )
                    }
                </List>
                <div className="play_btn">
                   <a href="#do_sexy" onClick={this.props.choose} style={{textDecoration: "none"}}>
                       <span role="img" aria-label="yea" aria-labelledby="yea" style={{fontSize: "50px", marginLeft: "25px"}}>🎉</span>
                   </a>
                </div>
                <ReactAudioPlayer
                  src={this.props.state.now_stream}
                  id="audio"
                  onEnded={this.props.nextSong}
                />
                {/* <audio id="audio" preload="none" onTimeUpdate={() => console.log("END123")}>
				    <source src={state.now_stream} type="audio/mpeg" />
				</audio> */}
			</Panel>
		)
	}
}

export default Home;
