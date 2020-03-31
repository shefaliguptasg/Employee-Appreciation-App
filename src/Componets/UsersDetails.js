import React from "react";
import {
    Button,Form,Grid,Header,Divider,Segment,Container, GridColumn, GridRow, Label
    } from 'semantic-ui-react';
    import { Link } from 'react-router-dom';
    import UserList  from './UserList'
 class UserDetails extends React.Component{

    constructor(props){ 
        super(props);   
        
       console.log(this.props,'hello')
       
        this.state={
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
        ],
            OtherUsers:''
        }
    }
    componentDidMount(){
        fetch('https://reqres.in/api/users').then(resp=>{
            resp.json().then((result)=>{
                console.log(result.data)
                this.setState({users:result.data})
            })
        })
            
    }
    render(){      
        return(
            <GridColumn>
            <Header as='h3' color="orange"><i>other users coin</i></Header>
            <Grid columns={4} >
                    <GridRow>
                        <GridColumn><h5>SenderName</h5> </GridColumn>
                        <GridColumn><h5>coins</h5> </GridColumn>
                        <GridColumn><h5>comment</h5> </GridColumn>
                    </GridRow>
            </Grid>
            <Grid columns={4}>
                {
                     this.state.coinsDetails.map(li => (
                    <GridRow>
                        <GridColumn><i><u>{li.SenderName}</u></i></GridColumn>
                        <GridColumn>{li.coins} </GridColumn>
                        <GridColumn>{li.comment} </GridColumn>                   
                    </GridRow>
                    ))
                }
            </Grid>
            {/* {this.state.isTransfercoin &&<TransferCoin/>} */}
        </GridColumn>
        )

    }
       
}

export default UserDetails ;