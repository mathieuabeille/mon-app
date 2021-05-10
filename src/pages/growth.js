import React, {Component} from 'react';
import '../stylesheets/growth.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTool } from '../actions/toolbox.js'
import logo from '../assets/logo.png';
import Cards from '../containers/cards.js';

class Growth extends Component{

componentWillMount() {
   this.props.fetchTool();
 }

 loading() {
  if(this.props.tools.records) {
        return (
        <div>
          <h1>La Growths Tools Box</h1>
          <h2>Design & Landing Page</h2>

          <Cards
            tools={this.props.tools}
            />
         </div>
        )
  }
  else {
      return (
        <div
         className='loading'
        >
        <img
        src={logo}
        className='App-logo'
        alt='Logo Napoleon Agency'
        />
        </div>
        )
    }
 }

  render() {
      return (
        this.loading()
      );
  }
}


function mapDispatchToProps(dispatch) {
 return bindActionCreators({ fetchTool }, dispatch);
}

function mapStateToProps(state) {
 return {
  tools: state.tools
 };
}


export default connect(mapStateToProps, mapDispatchToProps)(Growth);
