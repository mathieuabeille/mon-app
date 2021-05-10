import React, {Component} from 'react';
import '../stylesheets/cards.css';
import illustration from '../assets/illustrations/02.png';


class cardsToolBox extends Component{
   constructor(props) {
    super(props);
  }


  render() {
    return(
      <div>
        <div className="card-product">
          <img src={this.props.item.fields.Illustration} />
          <div className="card-product-infos">
            <h2>{this.props.item.fields.Name}</h2>
            <p>{this.props.item.fields.Description}</p>
            <a href={this.props.item.fields.Lien} target="_blank" className="btn-card">Visiter</a>
          </div>
        </div>
      </div>
    );
  }
}

export default cardsToolBox;
