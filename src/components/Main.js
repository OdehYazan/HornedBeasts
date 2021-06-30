import React from 'react';
import HornedBeasts from './HornedBeasts';
import Data from './Data.json'
import Model from './Model';
class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modelOn: false,
            imgUrl: '',
            title:'',
            description:''
        }
    }
    setData = (img,title,description) => {
        this.setState({
            imgUrl: img,
            title:title,
            description:description,
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


    render() {
        return (
            <div >
                {Data.map((item, index) => {
                    return (

                        <HornedBeasts imgUrl={item.image_url} title={item.title} description={item.description} key={index} setData={this.setData} />

                    )
                })
                }



                {
                   
                    <Model show={this.state.modelOn} onHide={this.hideModel} img={this.state.imgUrl} title={this.state.title} description={this.state.description} />
                }






            </div>


        )
    }

}
export default Main;