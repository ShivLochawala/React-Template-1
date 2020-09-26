import React, {Component} from 'react';
import HPortfolioItem from './HPortfolioItem';

import img1  from '../assets/img/portfolio/01-thumbnail.jpg';
import img2  from '../assets/img/portfolio/02-thumbnail.jpg';
import img3  from '../assets/img/portfolio/03-thumbnail.jpg';
import img4  from '../assets/img/portfolio/04-thumbnail.jpg';
import img5  from '../assets/img/portfolio/05-thumbnail.jpg';
import img6  from '../assets/img/portfolio/06-thumbnail.jpg';

const portfolio = [
    {title:"Threads",subtitle:"Illustration",img:img1},
    {title:"Explore",subtitle:"Graphic Design",img:img2},
    {title:"Finish",subtitle:"Identity",img:img3},
    {title:"Lines",subtitle:"Branding",img:img4},
    {title:"Southwest",subtitle:"Website Design",img:img5},
    {title:"Window",subtitle:"Photography",img:img6}
];

class HPortfolio extends Component{

    render(){
        return(
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Portfolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        {portfolio.map((item, index)=>{
                            return <HPortfolioItem {...item} key={index}/>
                        })}
                    </div>
                </div>
            </section>
        )
    }
}
export default HPortfolio;