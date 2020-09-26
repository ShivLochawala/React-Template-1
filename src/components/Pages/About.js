import React, {Component} from 'react';
import Header from '../Common/Header';
import HAbout from '../Common/HAbout';

import image from '../assets/img/about.jpg';

class About extends Component{

    render(){
        return(
            <div>
                <Header
                    title = "About Us"
                    subtitle = "It's really a great story"
                    showButton = {false}
                    image = {image}
                />
                <HAbout/>
            </div>
        )
    }
}
export default About;