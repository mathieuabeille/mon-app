import React, {Component} from 'react';
import '../stylesheets/home.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchDatas } from '../actions/index.js'
import Hero from '../containers/hero.js'


class Home extends Component{

componentWillMount() {
   this.props.fetchDatas();
 }

 loading() {
  if(this.props.datas.records) {
        return (
        <Hero
          datas={this.props.datas}
         />
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
