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


class RegisterForm extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        UserName:"",
        EmpCode:"",
        dept:"",
        password:"",
        confiPaswrd:"",
        UserNameErr:"",
        EmpCodeErr:"",
        deptErr:"",
        passwordErr:"",
        confiPaswrdErr:"", 
      };
    }
    valid()
    {
      if(this.state.UserName=="" )
      {
        this.setState({UserNameErr:"Username name can not be empty"})                    
      }
      if(this.state.EmpCode=="")
      {
        this.setState({EmpCodeErr:"Employee code can not be empty"})
      }
      if(this.state.dept==""){
        this.setState({deptErr:"Department can not be empty"})
      }
      if(this.state.password==""){
        this.setState({passwordErr:"password can not be empty"})
      }
      if(this.state.confiPaswrd!=this.state.password){
        this.setState({confiPaswrdErr:"not Matched"})
      }
      else if(this.state.UserName!=""&&this.state.EmpCode!=""&&this.state.dept!=""
      &&this.state.password!=""&&this.state.confiPaswrd!=""){
        return true
      }
    }
    handleChange= e=>
    {
      e.preventDefault();
        const {name , value} = e.target;
        let errors = this.state
        switch(name)
        {
            case "UserName":
              errors.UserNameErr =!nameRegex.test(value)&& value.length>0?"Invalid User Name ":"";
                break;
            case "EmpCode":
              errors.EmpCodeErr = !EmpCodeRegex.test(value)&& value.length>0 ?"Invalid Employee code should contains numbers only ":"";
                break;
            case "dept":
              errors.deptErr =value.length>5 && value.length>0 ?"Department Name should be in short form  ":"";
                break;
            case "password":
              errors.passwordErr = !strongRegex.test(value)&& value.length>0?" 8 character required and The string must contain at least one special character":"";
                break;
            case "confiPaswrd":
              errors.confiPaswrdErr = !strongRegex.test(value)&& value.length>0?" 8 character required and The string must contain at least one special character":"";
                break;
            default:
            break;
        }
        this.setState({errors,[name]:value},()=>console.log(errors))
    }
    submit= e=>
    {
     //e.preventDefault()
      if(this.valid())
      {
        alert("form has been submitted")
      }
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
                name = "UserName" 
                fluid size="small"
                icon="user"
                iconPosition="left"
                placeholder="UserName"
                onChange= {this.handleChange}
              />
             {this.state.UserNameErr.length > 0 &&
              <Message color="red">
                {this.state.UserNameErr}
              </Message>
              }
              EmployeeCode<Form.Input
                name= "EmpCode"
                placeholder="Employee Code"
                type="text"
                onChange={this.handleChange}
              />
                {this.state.EmpCodeErr.length > 0 &&
              <Message color="red">
                {this.state.EmpCodeErr}
              </Message>
                }
              Department<Form.Input
                name="dept"
                placeholder="Department"
                onChange={this.handleChange}
                />
                {this.state.deptErr.length > 0 &&
              <Message color="red">
                {this.state.deptErr}
              </Message>
                }
              Password<Form.Input
                name="password"
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={this.handleChange}
              />
              {this.state.passwordErr.length > 0 &&
              <Message color="red">
                {this.state.passwordErr}
              </Message>
              }
             confirm Password<Form.Input
                name="confiPaswrd"
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={this.handleChange}
              />
              {this.state.confiPaswrdErr.length > 0 &&
              <Message color="red">
                {this.state.confiPaswrdErr}
              </Message>
              }
              <Button   fluid size="large" onClick = {this.submit}>
              Register
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