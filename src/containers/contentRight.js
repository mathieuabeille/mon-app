import React, {Component} from 'react';
import styles from'../stylesheets/contentRight.css';


class ContentRight extends Component{
   constructor(props) {
    super(props);
  }


  contentRight() {
    if(this.props.datas.records) {
    return this.props.datas.records.filter(item => item.fields.Name === "rightValue").map(item => (
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
          src={item.fields.Illustration}
        />
      </div>
    </div>
     ))
  } else {
    return <div></div>
  }

  }

  render() {
    return(
      this.contentRight()
    );
}

}

export default ContentRight;
