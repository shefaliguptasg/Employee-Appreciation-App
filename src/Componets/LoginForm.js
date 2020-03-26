import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  } from 'semantic-ui-react';
const nameRegex = RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)
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
              UserID: '',
              Password: '',

            }
      };
    } 

    handleSubmit = e =>{
        e.preventDefault();
        if(this.state.UserID==null)
        {
          alert("UserName Can not be Empty")
        }
        if(this.state.Password==null)
        {
          alert("Password Can not be Empty,Please enter your Password")
        }
        else if(formValid(this.state.errors)){
             alert("Form  has been submited")
        }
        else{
          alert("Please Enter Valid Details to Login your Account")
        }
    }

    handleChange = e =>{
        e.preventDefault();
        const {name , value} = e.target;
        let errors = this.state.errors;
        switch(name)
        {
            case "UserID":
                errors.UserID =!EmpCodeRegex.test(value) && value.length>0 ?"Invalid UserID":"";
                break;
            case "Password":
                errors.Password = !strongRegex.test(value)?" 8 character required and The string must contain at least one special character":"";
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
    <Grid centered >
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
                  
          {errors.UserID.length>0 &&
            <Message color="red   ">{errors.UserID}</Message>
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
            {errors.Password.length>0 &&
            <Message color="red   ">{errors.Password}</Message>
          }
            <Button   fluid size="large" type= "submit" onClick={this.handleSubmit}>
            Login
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