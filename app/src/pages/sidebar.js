import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css'
//import { useBooleanKnob } from '@stardust-ui/docs-components'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

//const [visible, setVisible] = useBooleanKnob({ name: 'visible' })
var visible = true
function setVisible(set){
  visible = set;
}

export default  class SidebarPage  extends Component{
  
  render(){
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width='thin'
        >
          <Menu.Item as='a'>
            <Icon name='home' />
            Home
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='gamepad' />
            Games
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='camera' />
            Channels
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          <Segment basic>
            <Header as='h3'>Application Content</Header>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}
