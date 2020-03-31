import React from "react";
import {
    Grid,Header, GridColumn, GridRow,
    } from 'semantic-ui-react';

    class UserDetails extends React.Component{
    constructor(props){ 
        super(props);               
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
        // fetch('https://reqres.in/api/users').then(resp=>{
        //     resp.json().then((result)=>{
        //         console.log(result.data)
        //         this.setState({users:result.data})
                console.log(this.props,'hi')
                const{id}= this.props
        //     })
        // })
            
    }
    render(){      
        return(
            <GridColumn>
            <Header as='h2' color="orange" textAlign='center'><i> Recieved coin history</i></Header>
            <Grid centered columns={4} >
                    <GridRow>
                        <GridColumn color='purple'>SenderName</GridColumn>
                        <GridColumn  color='purple'>Coins </GridColumn>
                        <GridColumn  color='purple'>comment</GridColumn>
                    </GridRow>
            </Grid>
            <Grid centered columns={4}>
                {
                     this.state.coinsDetails.map(li => (
                    <GridRow centered >
                        <GridColumn  color='grey'><i><u>{li.SenderName}</u></i></GridColumn>
                        <GridColumn color='grey' >{li.coins} </GridColumn>
                        <GridColumn color='grey'>{li.comment} </GridColumn>                   
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