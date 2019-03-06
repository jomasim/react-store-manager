import React, {Component} from 'react';
import { Button, Container,Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './navigation.css';
class Navigation extends Component{
  render () {
    return(
      <Menu
        pointing
        secondary
        size='large'
      >
        <Container>
          <NavLink to='/' >
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
          </NavLink>
          <NavLink to='/' >
            <Menu.Item as='a'>Products</Menu.Item>
          </NavLink>
          <NavLink to='/' >
            <Menu.Item as='a'>Sales</Menu.Item>
          </NavLink>
          <Menu.Item position='right'>
            <Button as='a' primary>
              Log in
            </Button>
            <NavLink to='/register'>
            <Button as='a' primary  className='sign-up-btn'>
              Sign Up
            </Button>
            </NavLink>
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}
export default Navigation;