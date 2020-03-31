import React from 'react';
import{ Link}    from 'react-router-dom'
import history from './history';

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  } from 'semantic-ui-react';
const strongRegex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/);
const EmpCodeRegex= RegExp(/^[0-9]*$/)
const formValid= errors=>{
    let valid = true;
    Object.values(errors).forEach(val =>{ val.length > 0 && (valid= false)
    });
    return valid;
}
class LoginForm extends React.Component
{
   constructor(props)
   {
      super(props);
      this.state=
      {
        UserID : null,
         Password: null,
         errors:
           {
              UserIDErr: '',
              PasswordErr: '',
           }
     };
    } 

    valid()
  {
    let errors = {...this.state.errors}
     if(this.state.UserID==null)
    {
      errors.UserIDErr ='User id Can not be null';
      this.setState({errors})
      
    }
    if(this.state.Password==null)
    {
      errors.PasswordErr ='password  Can not be null';
      this.setState({errors})
    }
    else if (this.state.UserID!=null && this.state.Password!=null) {
      return true
    }
    else
    {return false}
  }

  handleSubmit = e =>{
    e.preventDefault();
    if( this.valid() &&formValid(this.state.errors)){
          history.push('/MainFormUser')
    }
    return false;
    
  }
    handleChange = e =>{
        e.preventDefault();
        const {name , value} = e.target;
        let errors = this.state.errors;
        switch(name)
        {
            case "UserID":
                errors.UserIDErr =!EmpCodeRegex.test(value) && value.length>0 ?"Invalid UserID":"";
                break;
            case "Password":
                errors.PasswordErr = !strongRegex.test(value)?" 8 character required and The string must contain at least one special character":"";
                break;
            default:
            break;
        }

        this.setState({errors,[name]:value},()=>console.log(errors))
    }
   render()
   {
     const{errors} = this.state;
     
     return(
    <Grid centered columns={4}>
     <Grid.Column>
          <Header as="h2" textAlign="center">
            Login
          </Header>
       <Segment>
          <Form size="small" >
            UserID<Form.Input
                      name ="UserID"
                      fluid
                      icon="user"
                      iconPosition="left"
                      placeholder="UserID"
                      type ="text"
                      required
                      onChange={this.handleChange}
                   />
                  
          {errors.UserIDErr.length>0 &&
            <Message color="red   ">{errors.UserIDErr}</Message>
          }
            Password<Form.Input
              name="Password" 
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              required
              onChange={this.handleChange}
            />
            {errors.PasswordErr.length>0 &&
            <Message color="red   ">{errors.PasswordErr}</Message>
          }
            <Button   fluid size="large" type= "submit" onClick={this.handleSubmit}>
              Login
           </Button>
          
         </Form>
        </Segment>
        <Message>
         Dont have an account? <Button><Link to="/Register">Register</Link></Button>
        </Message>
      </Grid.Column>
    
    </Grid>
    
     );
   }
}

export default LoginForm;