import React from 'react';
import { Panel, PanelHeader, Button, Cell, List, Div, Group } from '@vkontakte/vkui';
import ReactAudioPlayer from 'react-audio-player';

import './index.css'

import Icon28Play from '@vkontakte/icons/dist/28/play';
import Icon28Pause from '@vkontakte/icons/dist/28/pause';

class Home extends React.Component {	
  render(){
    let {state} = this.props
		return(
			<Panel id={this.props.id}>
				<PanelHeader>Посквон4им?</PanelHeader>
                <Group>
                    {
                        state.users.filter((item) => item.check).length > 0 && <Div>
                            Выбраны: {state.users.filter((item) => item.check).map((item) => item.name).join(", ")}
                        </Div>
                    }
                    <Div>
                        <Button size="xl" color="primary" onClick={this.props.go} data-to="find">Выбрать друзей</Button>
                    </Div>
                </Group>
                <List>
                    {
                        state.tracks && state.tracks.map((item, index) => 
                            <Cell
                                key={index}
                                id={index}
                                before={item.play_now ? <Icon28Pause fill="#fff" /> : <Icon28Play fill="#fff" />}
                                onClick={this.props.play}
                            >{item.name}</Cell>
                        )
                    }
                </List>
                {
                    state.users && <div className="play_btn">
                       <a href="#do_sexy" onClick={this.props.choose}>
                           <span role="img" aria-label="yea" aria-labelledby="yea" style={{fontSize: "50px", marginLeft: "25px"}}>🎉</span>
                       </a>
                    </div>
                }
                <ReactAudioPlayer
                  src={state.now_stream}
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
