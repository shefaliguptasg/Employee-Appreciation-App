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

class RegisterForm extends React.Component{
    constructor(props){
      super(props);
      this.state = {};
    }
     render()
     {
       return( 
      <Grid centered >
       <Grid.Column>
          <Header as="h2" textAlign="center">
              Register
          </Header>
         <Segment>
            <Form size="small">
              Name<Form.Input 
                fluid size="small"
                icon="user"
                iconPosition="left"
                placeholder="UserName"
              />
              EmployeeCode<Form.Input
                placeholder="Employee Code"
                type="integer"
              />
              Department<Form.Input
                placeholder="Department"
                />
              Password<Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
             confirm Password<Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Button   fluid size="large" >
               <a href ="https://www.facebook.com/">Register</a> 
              </Button>
            </Form>
          </Segment>
          <Message>
           Alredy have an account? <b>Login</b>
          </Message>
          </Grid.Column>
      </Grid>
       );
     }
  }

  export default RegisterForm;