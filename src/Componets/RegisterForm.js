import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
 } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import histroy from './history';
const nameRegex = RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)
const strongRegex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/);
const EmpCodeRegex= RegExp(/^[0-9]*$/)
const formValid= errors=>{
  let valid = true;
  Object.values(errors).forEach(val =>{ val.length > 0 && (valid= false)
  });
  return valid;
}

class RegisterForm extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        UserName:"",
        EmpCode:"",
        dept:"",
        password:"",
        confiPaswrd:"",
        errors:{
          UserNameErr:"",
          EmpCodeErr:"",
          deptErr:"",
          passwordErr:"",
          confiPaswrdErr:""}
        
      };
    }
    valid() 
    {
      let errors = {...this.state.errors}
      if(this.state.UserName==="" )
      {
        errors.UserNameErr="Username name can not be empty"
        this.setState({errors})                    
      }
      if(this.state.EmpCode==="")
      {
        errors.EmpCodeErr="Employee code  can not be empty"
        this.setState({errors})
      }
      if(this.state.dept===""){
        errors.deptErr="dept  can not be empty"
        this.setState({errors})
      }
      if(this.state.password===""){
        errors.passwordErr="password can not be empty"
        this.setState({errors})
      }
      if(this.state.confiPaswrd!==this.state.password){
        errors.confiPaswrdErr="password  not matched "
        this.setState({errors})
      }
      else if(this.state.UserName!==""&&this.state.EmpCode!==""&&this.state.dept!==""
      &&this.state.password!==""&&this.state.confiPaswrd!==""){
        return true
      }
    }
    handleChange= e=>
    {
      e.preventDefault();
        const {name , value} = e.target;
        let errors = this.state.errors
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
     e.preventDefault()
      if(this.valid()&& formValid(this.state.errors))
      {
        //alert("form has been submitted")
        histroy.push('/')
        return true
      }
      return false
    }
     render()
     {
      const{errors} = this.state
       return(      
      <Grid centered columns={4}>
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
             {errors.UserNameErr.length > 0 &&
              <Message color="red">
                {errors.UserNameErr}
              </Message>
              }
              EmployeeCode<Form.Input
                name= "EmpCode"
                placeholder="Employee Code"
                type="text"
                onChange={this.handleChange}
              />
                {errors.EmpCodeErr.length > 0 &&
              <Message color="red">
                {errors.EmpCodeErr}
              </Message>
                }
              Department<Form.Input
                name="dept"
                placeholder="Department"
                onChange={this.handleChange}
                />
                {errors.deptErr.length > 0 &&
              <Message color="red">
                {errors.deptErr}
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
              {errors.passwordErr.length > 0 &&
              <Message color="red">
                {errors.passwordErr}
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
              {errors.confiPaswrdErr.length > 0 &&
              <Message color="red">
                {errors.confiPaswrdErr}
              </Message>
              }
              <Button   fluid size="large" onClick = {this.submit}>
               <Link to ="/LoginForm"> Register</Link>
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