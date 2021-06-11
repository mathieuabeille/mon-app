import React, { Component } from 'react';
import "../../node_modules/animate.css/animate.compat.css";
import '../stylesheets/description.css';
import ScrollAnimation from 'react-animate-on-scroll';


class Description extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( <
            div className = "description" > {
                this.props.datas.records.filter(item => item.fields.Name === "description").map(item => ( <
                    div key = { item.id } >

                    <
                    ScrollAnimation animateIn = 'fadeIn'
                    animateOut = 'fadeOut' > <
                    div className = "item" > < h1 > Sortez du rang < /h1><br/ > { item.fields.H1 } < /div > < /
                    ScrollAnimation >
                    <
                    ScrollAnimation animateIn = 'fadeIn'
                    animateOut = 'fadeOut' > <
                    div className = "item" > < h1 > Ayez un objectif < /h1> { item.fields.H2 } < /div > < /
                    ScrollAnimation >
                    <
                    ScrollAnimation animateIn = 'fadeIn'
                    animateOut = 'fadeOut' >
                    <
                    div className = "item" > < h1 > Obtenez du traffic < /h1> { item.fields.H3 } < /div > < /
                    ScrollAnimation >
                    <
                    ScrollAnimation animateIn = 'fadeIn'
                    animateOut = 'fadeOut' >
                    <
                    div className = "discuss" > { item.fields.CTA } < /div > < /
                    ScrollAnimation > <
                    /
                    div >
                ))
            } <
            /div>
        );
    }
}

export default Description;