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
import { render } from '@testing-library/react';
class MainForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state ={isLoginOpen: true, isRegisterOpen:false};
    }
  
    showLoginBox(){
      this.setState({isLoginOpen: true ,isRegisterOpen:false})
    }
    showRegisterBox(){
      this.setState({isRegisterOpen: true ,isLoginOpen:false})
    }
 render()
 {
   return(
    <Grid>
      <Grid.Column>
      <img src={require('./s.jpg') } width='30' height='70'></img>
      </Grid.Column>
     
     <Grid centered Row={9} >
       <Header as= "h1" >
        </Header>
        <Header as= "h1" color="blue" textAlign="center">
            Employee Appriciation App
        </Header>
       <Grid.Row>
        <Segment>
          <Form>
            <Button onClick={this.showLoginBox.bind(this)}>Login</Button>
            <Button onClick={this.showRegisterBox.bind(this)}>Register</Button>

          </Form>
        </Segment>
       </Grid.Row>
       {this.state.isLoginOpen && <LoginForm/>}
       {this.state.isRegisterOpen && <RegisterForm/>}
      </Grid>
    </Grid> 

  );
 }
}


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
export default MainForm;
// export default () => (
//     <Grid centered columns={3}>
//     <Grid.Column>
//      <Header as= "h1" color="blue" textAlign="center">
//         Employee Appriciation App
//      </Header> 
//       <Header as="h2" textAlign="center">
//         Login
//       </Header>
//       <Segment>
//         <Form size="large">
//           <Form.Input
//             fluid
//             icon="user"
//             iconPosition="left"
//             placeholder="Email address"
//           />
//           <Form.Input
//             fluid
//             icon="lock"
//             iconPosition="left"
//             placeholder="Password"
//             type="password"
//           />
//           <Button   fluid size="large">
//           <a href ="https://www.facebook.com/">Login</a> 
//           </Button>
//         </Form>
//       </Segment>
//       <Message>
//         Not registered yet? <a href="#">Sign Up</a>
//       </Message>
//     </Grid.Column>
//   </Grid>
// );