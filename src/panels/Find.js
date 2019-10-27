import React from 'react';
import { Panel, PanelHeader, FormLayout, Checkbox, Search, HeaderButton, platform, IOS } from '@vkontakte/vkui';

import Icon24Back from '@vkontakte/icons/dist/24/back'
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back'

const osname = platform()

class Find extends React.Component {	
  constructor(props){
    super(props);
    this.state = { 
      search: '',
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange (search) { this.setState({ search }); }

  get users () {
    const search = this.state.search.toLowerCase();
    return this.props.state.users.filter((user) => user.username.toLowerCase().indexOf(search) > -1);
  }

  render(){
		return(
			<Panel id={this.props.id}>
				<PanelHeader left={<HeaderButton onClick={() => {
                    this.props.choose()
                }}>{osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}</HeaderButton>}>
                    Выбрать друзей
                </PanelHeader>
                <Search value={this.state.search} onChange={this.onChange}/>
                <FormLayout>
                {this.users.length > 0 &&
                    this.users.map((user, index) => 
                        <Checkbox style={{color: "white"}} onChange={this.props.onChoose} id={index} checked={user.check} key={user.id}>
                            <b>{user.username}</b>
                        </Checkbox>
                    )
                }
                </FormLayout>
			</Panel>
		)
	}
}

export default Find;
