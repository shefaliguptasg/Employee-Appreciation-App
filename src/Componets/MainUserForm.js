import React from 'react'
import th from './th.jpg';
import { Button,Form,Grid,Header,Divider,Segment,
    Container, GridColumn, GridRow, Label, } from 'semantic-ui-react';
import Search  from './SearchComponent'
import UserList from './UserList'
   
 const totalCoins=['20','30','40']

class MainForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userlist: [{
                id:'101',
                Username:'shefali gupta',
                EmployeeCode:'1198',
                Department:'FAS',
                TotalRecieveCoin:'70',
                coinsDetails:[{
                    id:'101',
                    SenderName:'AkshitaSharma',
                    coins:'2',
                    comment:'she helps how to import data from api'
                },
                {
                    id:'1001',
                    SenderName:'AkshitaSharma',
                    coins:'2',
                    comment:'she helps how to import data from api'
                },
                {
                    id:'1002',
                    SenderName:'AkshitaSharma',
                    coins:'2',
                    comment:'she helps how to import data from api'
                },{
                    id:'1003',
                    SenderName:'AkshitaSharma',
                    coins:'2',
                    comment:'she helps how to import data from api'
                }
                     ]
            },
            {
                id:'1004',
                Username:'Akshita gupta',
                EmployeeCode:'1190',
                Department:'FAS',
                TotalRecieveCoin:'60'
            },
            {
                id:'102',
                Username:'kunal kumar',
                EmployeeCode:'1195',
                Department:'FAS',
                TotalRecieveCoin:'60'
            },
            {
                id:'104',
                Username:'kunal kumar',
                EmployeeCode:'1197',
                Department:'FAS',
                TotalRecieveCoin:'60'
            }
            ],
            OtherUsers:''
        }

    }
    handlUser = e=>{

        console.log(e.target.va)
        this.setState({OtherUsers:e.target.value})
        console(`hello${this.state.OtherUsers}`)
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
        <Grid centered columns={2}>
            <UserList list={filterUsers}/>
            <Grid.Column verticalAlign='top'>
                <Grid.Row>
                    <Button content='Sign out' icon='signup' size='small' />
                    <img src={th} width='100px'/>
                </Grid.Row>
                <Grid.Row>
                    <Grid columns={2}>
                        <GridColumn>
                            <Label> User Name</Label>:- {filterMainUser.map(x =>(x.Username))}<br/>
                       <br/><Label> EmployeeCode</Label>:- {filterMainUser.map(x =>(x.EmployeeCode))} <br/>
                        </GridColumn>
                        <GridColumn>
                            <Label> Department</Label>:- {filterMainUser.map(x =>(x.Department))}<br/>
                            <br/><Label>Coins</Label> {filterMainUser.map(x =>(x.TotalRecieveCoin))}
                        </GridColumn>
                    </Grid>
                </Grid.Row>
                <Grid.Row>
                    
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

 