import React from 'react'
import { Grid, Container, Segment, Form, Header,Dropdown ,Modal} from 'semantic-ui-react'

class TransferCoin extends React.Component{
    render(){
return(
    <Container>
        <Modal>
            <Header as ='h5' color='blue'>
                Gift Coin to user
            </Header>
            <Grid centered>
                <Segment>
                    <Form>
                        <Dropdown >
                            {/* <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option> */}
                        </Dropdown>
                    </Form>
                </Segment>
            </Grid>
        </Modal>
    </Container>
      
)
    }

}
export default TransferCoin