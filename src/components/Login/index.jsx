import React, {Component} from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import '../Register/register.css';

class Login extends Component {
  render () {
    return (
      <div className='form'>
        <Grid textAlign='center' className='grid-container' verticalAlign='middle'>
          <Grid.Column className='grid-column'>
            <Header as='h2' textAlign='center'>
              Sign in here
            </Header>
            <Form size='large'>
              <Segment basic>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />
                <Button primary fluid size='large'>
                  Submit
                </Button>
              </Segment>
            </Form>
            Don't have account?
            <NavLink to='/register'>
              <a href='#'>Sign up</a>
            </NavLink>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default Login;

