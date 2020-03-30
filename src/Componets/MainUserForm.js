import React from 'react'
import th from './th.jpg';
import { Button,Form,Grid,Header,Divider,Segment,
    Container, GridColumn, GridRow, Label, } from 'semantic-ui-react';
import Search  from './SearchComponent'
import UserList from './UserList'
   
 const totalCoins=['20','30','40']

class MainForm extends React.Component{
    constructor(){
        super();
        this.state={
            userlist: [{
                id:'101',
                Username:'shefali gupta',
                EmployeeCode:'1198',
                Department:'FAS',
                RecieveCoin:'70'
            },
            {
                id:'102',
                Username:'Akshita gupta',
                EmployeeCode:'1190',
                Department:'FAS',
                RecieveCoin:'60'
            },
            {
                id:'102',
                Username:'kunal kumar',
                EmployeeCode:'1195',
                Department:'FAS',
                RecieveCoin:'60'
            },
            {
                id:'102',
                Username:'kunal kumar',
                EmployeeCode:'1197',
                Department:'FAS',
                RecieveCoin:'60'
            }
            ],
            OtherUsers:''
        }

    }
    handlUser = e=>{
        console.log(e.target.va)
        this.setState({OtherUsers:e.target.value})
    }
    render(){
        let userid ='1190';
        let filterMainUser = this.state.userlist.filter(user =>{
            return user.EmployeeCode.includes(userid)})
        let filterUsers = this.state.userlist.filter(user =>{
            return user.Username.toLowerCase().includes(this.state.OtherUsers.toLowerCase())})
return(
<Container>
    <Search handlUser={this.handlUser}/>
    <Segment placeholder>
        <Grid columns={2}>
            <UserList list={filterUsers}/>
            <Grid.Column verticalAlign='top'>
                <Grid.Row>
                    <Button content='Sign out' icon='signup' size='small' />
                    <img src={th} width='100px'/>
                    </Grid.Row>
                <Grid.Row>
                    <Label> User Name</Label>:- shefali<br/>
                <br/><Label> EmployeeCode</Label>:- 1190 <br/>
                <br/><Label> Department</Label>:- FAS
                </Grid.Row>
            </Grid.Column>
            
            </Grid>
            <Divider vertical></Divider>
        </Segment>
</Container>   
    );
}
}

export default MainForm;

 