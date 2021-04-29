import React, {Component} from 'react';
import styles from'../stylesheets/contentLeft.css';


class ContentLeft extends Component{
   constructor(props) {
    super(props);
  }


  contentLeft() {
    if(this.props.datas.records) {
    return this.props.datas.records.filter(item => item.fields.Name === "leftValue").map(item => (
      <div
        key={item.fields.H1}
        className="benefit-content-left"

      >

      <div className="benefit-text-left">
        <h3>
          {item.fields.H1}
        </h3>
        <br/>
        <p>
          {item.fields.H3}
        </p>
        <br/>

      </div>
      <div className="benefit-illustration-left">
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
      this.contentLeft()
    );
}

}

export default ContentLeft;
