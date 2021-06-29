import React from 'react';
class HornedBeasts extends React.Component{
    render(){
        return(
            <div className='card'>
                 
                <h2>{this.props.title}</h2>
                <img src={this.props.imgUrl} alt={this.props.title}/>
                <p>{this.props.description} </p>

            </div>
        )
    }
}

export default HornedBeasts;