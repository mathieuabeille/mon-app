import React, {Component} from 'react';
import styles from'../stylesheets/contentRight.css';
import illustration from '../assets/illustrations/01.png';
import '../stylesheets/description.css';


class Description extends Component{
   constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="description">
        {this.props.datas.records.filter(item => item.fields.Name === "description").map(item => (
          <div
            key={item.id}
            >
            <div className="item">{item.fields.H1}</div>
            <div className="item">{item.fields.H2}</div>
            <div className="item">{item.fields.H3}</div>
            <div className="item">{item.fields.CTA}</div>
          </div>
          )
        )}
    </div>
    );
  }
}

export default Description;
