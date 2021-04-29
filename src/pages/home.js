import React, {Component} from 'react';
import '../stylesheets/home.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchDatas } from '../actions/index.js'
import Hero from '../containers/hero.js'
import ContentLeft from '../containers/contentLeft.js'
import ContentRight from '../containers/contentRight.js'
import DotsNavigation from '../containers/dotnavigation.js'


class Home extends Component{

componentWillMount() {
   this.props.fetchDatas();
 }

 loading() {
  if(this.props.datas.records) {
        return (
        <div>

        <DotsNavigation
          datas={this.props.datas}
         />
        <Hero
          datas={this.props.datas}
         />
                 <ContentLeft
          datas={this.props.datas}
         />
                 <ContentRight
          datas={this.props.datas}
         />
         </div>

        )
  }
  else {
      return (
        <div>Loading...</div>
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
