import React, {Component} from 'react';
import '../stylesheets/home.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchDatas } from '../actions/index.js'
import Hero from '../containers/hero.js'
import ContentLeft from '../containers/contentLeft.js'
import Description from '../containers/description.js'
import ContentRight from '../containers/contentRight.js'
import Calendly from '../containers/calendly.js'
import DotsNavigation from '../containers/dotnavigation.js'
import logo from '../assets/logo.png';


class Home extends Component{

componentWillMount() {
   this.props.fetchDatas();
 }

 loading() {
  if(this.props.datas.records) {
        return (
        <div>
          <Hero
            datas={this.props.datas}
           />
          <Description
            datas={this.props.datas}
           />
          <Calendly/>
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
    console.log(this.props.datas);
      return (
        this.loading()
      );
  }
}


function mapDispatchToProps(dispatch) {
 return bindActionCreators({ fetchDatas }, dispatch);
}

function mapStateToProps(state) {
 return {
  datas: state.datas
 };
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
