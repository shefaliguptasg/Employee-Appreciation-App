import React from 'react'
import {
    Button,Grid,Header, GridColumn, GridRow,
    } from 'semantic-ui-react';
import MainForm from './MainUserForm'
import TransferCoin from './Transfer';
import LoginForm from './LoginForm';
import { Link, Router } from 'react-router-dom';


class UserList  extends React.Component
{
    constructor(props){
        super(props)
        this.state={
            isTransfercoin:false
        }
    }
    render(){
        let UserList = this.props.list;
        console.log(UserList,'hi')
        return(
            <GridColumn>
                <Header as='h3' color="orange"><i>other users coin</i></Header>
                <Grid columns={4} >
                        <GridRow>
                            <GridColumn><h5>user</h5> </GridColumn>
                            <GridColumn><h5>RecievedCoins</h5> </GridColumn>
                            <GridColumn><h5>AddCoins</h5> </GridColumn>
                        </GridRow>
                </Grid>
                <Grid columns={4}>
                    {
                        UserList.map(li => (
                        <GridRow>
                            <GridColumn><Link to ={{pathname:`/MainFormUser/${li.EmployeeCode}`,params:{id:'hello'}}} ><i><u>{li.Username}</u></i></Link> </GridColumn>
                            <GridColumn>{li.TotalRecieveCoin} </GridColumn>
                            <GridColumn>
                                <Button onClick={(e) => this.setState({isTransfercoin:true})}> +</Button>
                            </GridColumn>
                        
                        </GridRow>
                        ))
                    }
                </Grid>
                {this.state.isTransfercoin &&<TransferCoin/>}
            </GridColumn>
        )
    }

}

export default UserList;