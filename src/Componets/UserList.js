import React from 'react'
import {
    Button,Form,Grid,Header,Divider,Segment,Container, GridColumn, GridRow, Label,
    } from 'semantic-ui-react';
import MainForm from './MainUserForm'
function UserList(props)
{
    let UserList = props.list;
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
                    <GridColumn><a href='#'><i><u>{li.Username}</u></i></a> </GridColumn>
                    <GridColumn>{li.RecieveCoin} </GridColumn>
                    <GridColumn><Button> +</Button> </GridColumn>
                </GridRow>
                ))
            }
        </Grid>
    </GridColumn>
    )
}

export default UserList;