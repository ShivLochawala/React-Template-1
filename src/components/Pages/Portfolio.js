import React, {Component} from 'react';
import Header from '../Common/Header';
import HPortfolio from '../Common/HPortfolio';

import image from '../assets/img/portfolio.jpg';

class Portfolio extends Component{

    render(){
        return(
            <div>
                <Header
                    title = "Portfolio"
                    subtitle = "Our PORTFOLIO"
                    showButton = {false}
                    image = {image}
                />
                <HPortfolio/>
            </div>
        )
    }
}
export default Portfolio;