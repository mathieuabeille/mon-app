import React,{ useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { InlineWidget } from "react-calendly";
import '../stylesheets/calendly.css';


function Calendly() {

  return(
    <div className="calendly">
      <InlineWidget url="https://calendly.com/mathieu-abeille/30-minutes-growth-avec-mathieu-prasith" />
    </div>
    )
  };




export default Calendly;
