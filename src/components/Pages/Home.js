import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

//Re-usable Components
import HServices from '../Common/HServices';
import HPortfolio from '../Common/HPortfolio';
import HAbout from '../Common/HAbout';
import HTeam from '../Common/HTeam';
import HContact from '../Common/HContact';

class Home extends Component{
    
    render(){
        return(
            <div>
                <Header
                    title = "Welcome To Our Studio!"
                    subtitle = "It's NICE To MEET YOU"
                    buttonText = "Tell Me More"
                    link = "/services"
                    showButton = {true}
                    image = {image}
                />
                <HServices/>
                <HPortfolio/>
                <HAbout/>
                <HTeam/>
                <HContact/>
            </div>
        )
    }
}
export default Home;