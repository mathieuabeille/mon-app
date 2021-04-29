import React,{ useState } from 'react';
import '../stylesheets/dotsnavigation.css';
import ReactTooltip from 'react-tooltip';


function Dot(props) {
  const name = props.name;

  const handleScroll = () => {

    if (window.scrollY > 350) {
      var x, i;
      x = document.querySelectorAll(".dot");
        for (i = 0; i < x.length; i++) {
          x[i].className = "dot dot-scrolled";
         }
    } else if(window.scrollY > 300){
      var x, i;
      x = document.querySelectorAll(".dot");
        for (i = 0; i < x.length; i++) {
          x[i].className = "dot";
      }
    } else {
      var x, i;
      x = document.querySelectorAll(".dot");
        for (i = 0; i < x.length; i++) {
          x[i].className = "dot hidden";
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  return(
    <div>
    <ReactTooltip effect="solid" backgroundColor="transparent" />

      <button
        className='dot' data-tip={name}
        >
      </button>

    </div>
    )
  };




export default Dot;
