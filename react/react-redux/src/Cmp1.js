import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SET_NAME, ADD_AGE} from './actions';

class Cmp1 extends Component{
  constructor(...args) {
    super(...args);

  }

  fn() {
    this.props.setName("李四");
  }
  fn2() {
    this.props.addAge(5);
  }

  render()
  {
    return (
        <div>
          组件1
          <input type="button" value="修改" onClick={this.fn.bind(this)} />
          <input type="button" value="+5" onClick={this.fn2.bind(this)}/>
        </div>
    );
  };
}

export default connect((state, props) => {
  return state;
}, {
  setName(name) {
   return {
     type: SET_NAME,
     name
   };
  },
  addAge(n) {
   return {
     type: ADD_AGE,
     n
   }
  }
})(Cmp1);
