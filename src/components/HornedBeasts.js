
import React from 'react';
// import Card from 'react-bootstrap/Card'
import {Button,Card} from 'react-bootstrap'


class HornedBeasts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfLikes: 0,
            numberOfDislikes: 0
        }
    }

    // function to count the clicks on the like button
    likeNumbers = () => {
        this.setState({
            numberOfLikes: this.state.numberOfLikes + 1
        })
    }

    // function to count the clicks on the Dislike button
    dislikeNumbers = () => {
        this.setState({
            numberOfDislikes: this.state.numberOfDislikes + 1
        })
    }
    render() {
        return (

            <>
                <Card className='Card' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imgUrl} alt={this.props.title}  onClick={()=>{this.props.setData(this.props.imgUrl,this.props.title,this.props.description)}} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text id='description'>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                            👍 {this.state.numberOfLikes}   <span></span>     {this.state.numberOfDislikes} 👎
                        </Card.Text>
                        <Button onClick={this.likeNumbers} variant="primary">like 👍</Button> <Button id='dislike' onClick={this.dislikeNumbers} variant="danger">Dislike👎</Button>
                    </Card.Body>
                </Card>


               
            </>
        )
    }
}
export default HornedBeasts;