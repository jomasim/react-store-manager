import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import './home.css'
import {
  Button,
  Container,
  Menu,
  Segment,
} from 'semantic-ui-react';

class Home extends Component{
  render () {
    return (
      <Segment
        textAlign='center'
        className='main-segment'
        vertical
      >
        <Container>
          <div className='main-title'>
            <p>Store Manager</p>
            <h2>Perfect solution for your store operations</h2>
          </div>
        </Container>
      </Segment>
    )
  }

}
export default Home;