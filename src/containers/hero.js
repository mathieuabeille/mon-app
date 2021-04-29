import React, {Component} from 'react';
import '../stylesheets/hero.css';


class Hero extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.datas.records.filter(item => item.fields.Name === "hero").map(item => (
          <div
            className="wrapper"
            key={item.id}
          >
            <div>
              <h1 className="glitch" data-content={item.fields.H1}>
              {item.fields.H1}
                <span className="glitch" data-content={item.fields.H2}>{item.fields.H2}</span>
              </h1>
            </div>
            <div className="btn-yellow">
              {item.fields.CTA}
            </div>
          </div>
        ))
      }
      </div>
      );
  }
}



export default Hero;
