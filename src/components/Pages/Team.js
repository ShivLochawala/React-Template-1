import React, {Component} from 'react';
import Header from '../Common/Header';
import HTeam from '../Common/HTeam';

import image from '../assets/img/team.jpg';

class Team extends Component{

    render(){
        return(
            <div>
                <Header 
                    title = "Team"
                    subtitle = "It's GOOD TO WORK"
                    showButton = {false}
                    image = {image}
                />
                <HTeam/>
            </div>
        )
    }
}
export default Team;