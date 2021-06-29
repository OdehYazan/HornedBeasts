
import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class HornedBeasts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfLikes: 0
        }

        // function to count the clicks on the button
         

    }
    counterOfLikes = () =>{
        this.setState({
            numberOfLikes:this.state.numberOfLikes+1
        })
    }
    render() {
        return (
            // <div className='card'>

            //     <h2>{this.props.title}</h2>
            //     <img src={this.props.imgUrl} alt={this.props.title}/>
            //     <p>{this.props.description} </p>

            // </div>
            
                <Card className='Card' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imgUrl} alt={this.props.title}  />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text id='description'>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                            👍 {this.state.numberOfLikes}
                        </Card.Text>
                        <Button onClick={this.counterOfLikes}  variant="primary">like ME 👍</Button>
                    </Card.Body>
                </Card>
            
        )
    }
}

export default HornedBeasts;