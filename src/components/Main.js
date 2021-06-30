import React from 'react';
import HornedBeasts from './HornedBeasts';
import Data from './Data.json'
import Model from './Model';
import {Form,Button} from 'react-bootstrap'
class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modelOn: false,
            imgUrl: '',
            title: '',
            description: '',
            numberOfHorns: 0,
            newArray:[]
        }
    }
    setData = (img, title, description) => {
        this.setState({
            imgUrl: img,
            title: title,
            description: description,
            modelOn: true,

        })
    }
    // showModel = () => {
    //     this.setState({
    //         modelOn: true,
    //         // modelChosenBeast:item.keyWord
    //     })
    // }

    hideModel = () => {
        this.setState({
            modelOn: false
        })
    }

    submit = (event) => {
        event.preventDefault();
        let data 
        this.setState({
            numberOfHorns: event.target.numberOfHorns.value
        })
        
         Data.filter(item =>{
             data = item.horns === this.state.numberOfHorns
            return({
                data
            } )
        })
        console.log(data);
    }


    render() {
        return (
            <div >


                {<form onSubmit={this.submit}>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Filter Beasts By Horns Number </Form.Label>
                        <Form.Control as="select" name='numberOfHorns' type='submit'>
                            <option value='0'>All</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='100'>😱😱</option>
                        </Form.Control>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form.Group>


                </form>

                }
                {/* {
                    Data.map((item, index) => {
                        return (

                            <HornedBeasts imgUrl={item.image_url} title={item.title} description={item.description} key={index} setData={this.setData} />

                        )
                    })
                } */}
                  

                {

                    <Model show={this.state.modelOn} onHide={this.hideModel} img={this.state.imgUrl} title={this.state.title} description={this.state.description} />
                }







            </div >


        )
    }

}
export default Main;