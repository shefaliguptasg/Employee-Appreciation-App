import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  GridColumn,
  Container,
  Dropdown,
} from 'semantic-ui-react';

class LoginForm extends React.Component
{
   constructor(props)
   {
      super(props);
      this.state = 
      {
         UserName : null,
         Password: null,
    
        errors:
           {
              UserName: '',
              Password: '',

            }
      };
    } 

   render()
   {
     return(
    <Grid centered >
     <Grid.Column>
          <Header as="h2" textAlign="center">
            Login
          </Header>
       <Segment>
          <Form size="small">
            UserName<Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="UserName"
              onChange={this.handleChange}
            />
            Password<Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />
            <Button   fluid size="large" >
             <a href ="https://www.facebook.com/">Login</a> 
            </Button>
          </Form>
        </Segment>
        <Message>
         Dont have an account? <b>Register</b>
        </Message>
      </Grid.Column>
    </Grid>
     );
   }
}

export default LoginForm;