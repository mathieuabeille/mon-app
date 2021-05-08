import React, {Component} from 'react';
import styles from'../stylesheets/contentRight.css';
import illustration from '../assets/illustrations/01.png';
import ScrollTrigger from 'react-scroll-trigger';


class ContentRight extends Component{
   constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div>
            {this.props.datas.records.filter(item => item.fields.Name === "rightValue").map(item => (
              <div
                key={item.fields.H1}
                className="benefit-content-right"
              >

              <div className="benefit-text-right">
                <h3>
                  {item.fields.H1}
                </h3>
                <br/>
                <p>
                  {item.fields.H3}
                </p>
                <br/>

              </div>
              <div className="benefit-illustration-right">
                <img
                  src={illustration}
                  className='illustration'
                />
              </div>
      </div>
     ))}
    </div>
    );
  }
}

export default ContentRight;
