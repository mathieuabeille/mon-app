import React, {Component} from 'react';
import styles from'../stylesheets/contentLeft.css';
import illustration from '../assets/illustrations/02.png';
import ScrollTrigger from 'react-scroll-trigger';



class ContentLeft extends Component{
   constructor(props) {
    super(props);
    this.state = {visible: false};
  }
  onEnterViewport() {
    this.setState({
      visible: true,
    });
  }

  onExitViewport() {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { visible } = this.state;
    return(
      <ScrollTrigger onEnter={()=>this.onEnterViewport} onExit={()=>this.onExitViewport}>
      <div>
      {this.props.datas.records.filter(item => item.fields.Name === "leftValue").map(item => (
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
                  src={illustration}
                  className='illustration-first'
                />
              </div>
      </div>
     ))}
      </div>
      </ScrollTrigger>

    );
}

}

export default ContentLeft;
