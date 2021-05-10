import React, {Component} from 'react';
import '../stylesheets/cards.css';
import illustration from '../assets/illustrations/02.png';
import Card from './card.js';


class Cards extends Component{
   constructor(props) {
    super(props);
  }


  render() {
    return(
      <div className="cards">
        {this.props.tools.records.map(item => (
          <Card
            item={item}
            key={item.id}
          />
       ))}
      </div>

    );
}

}

export default Cards;








