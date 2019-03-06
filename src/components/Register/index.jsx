import React, {Component} from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import './register.css';

class Register extends Component {
  render () {
    return (
      <div className='form'>
        <Grid textAlign='center' className='grid-container' verticalAlign='middle'>
          <Grid.Column className='grid-column'>
            <Header as='h2' textAlign='center'>
              Sign up here
            </Header>
            <Form size='large'>
              <Segment basic>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                <Form.Input  iconPosition='left' placeholder='Username' />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Confirm Password'
                  type='password'
                />

                <Button primary fluid size='large'>
                  Submit
                </Button>
              </Segment>
            </Form>

            Don't have account? <a href='#'>Sign in</a>

          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default Register

