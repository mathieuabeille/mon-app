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
          <h1>Notre boîte à outil</h1>
          <br/><br/>
          <h2>Pour les sites internets</h2>
          <Cards
            tools={this.props.tools}
            />
          <br/><br/>
          <h2>Pour l'obtention de nouveaux prospects</h2>
          <Cards
            tools={this.props.tools}
            />
          <br/><br/>
          <h2>Pour dynamiser vos ventes en ligne</h2>
          <Cards
            tools={this.props.tools}
            />
          <br/><br/>
          <h2>Pour votre e-réputation</h2>
          <Cards
            tools={this.props.tools}
            />
         <br/><br/>
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
