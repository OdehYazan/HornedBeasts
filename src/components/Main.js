import React from 'react';
import HornedBeasts from './HornedBeasts';
import Data from './Data.json'
class Main extends React.Component {
    render() {
        return (
            <div >
                {Data.map((item,index) => {
                    return (
                       
                        <HornedBeasts imgUrl={item.image_url} title={item.title} description={item.description} key={index}/>
                       
                    )
                }
                )
                
                }
                

            </div>


        )
    }

}
export default Main;