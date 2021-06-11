import React, { Component } from 'react';
import '../stylesheets/hero.css';
import { PopupButton } from "react-calendly";
import '../stylesheets/description.css';
import ScrollAnimation from 'react-animate-on-scroll';


class Hero extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return ( <
            div > {
                this.props.datas.records.filter(item => item.fields.Name === "hero").map(item => ( <
                    div className = "hero"
                    key = { item.id } >
                    <
                    ScrollAnimation animateIn = 'fadeIn'
                    animateOut = 'fadeOut' >
                    <
                    div >
                    <
                    h1 className = "glitch2"
                    dataContent = { item.fields.H1 } > { item.fields.H1 } <
                    span className = "glitch"
                    dataContent = { item.fields.H2 } > { item.fields.H2 } <
                    /span> < /
                    h1 > <
                    /div> <
                    PopupButton className = "btn-yellow"
                    pageSettings = {
                        {
                            backgroundColor: 'ffffff',
                            hideEventTypeDetails: false,
                            hideLandingPageDetails: false,
                            primaryColor: '1B202D',
                            textColor: '1B202D'
                        }
                    }
                    text = { item.fields.CTA }
                    url = "https://calendly.com/mathieu-abeille/30-minutes-growth-avec-mathieu-prasith"

                    /
                    >
                    <
                    /ScrollAnimation> <
                    /div> 
                ))
            } <
            /div>
        );
    }
}



export default Hero;