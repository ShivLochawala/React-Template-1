import React, {Component} from 'react';
import Header from '../Common/Header';
import HServices from '../Common/HServices';

import image from '../assets/img/services.jpg';

class Services extends Component{

    render(){
        return(
            <div>
                <Header
                    title = "Services"
                    subtitle = "What we are providing"
                    showButton = {false}
                    image = {image}
                />
                <HServices/>
            </div>
        )
    }
}
export default Services;