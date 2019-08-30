import React from 'react';
import './App.css';
import {connect} from 'react-redux';


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Cmp1 from './Cmp1';
import Cmp2 from './Cmp2';

class App extends React.Component{
  render() {
    return (
      <Router>
        <Link to="/">首页</Link>
        <Link to="/news">新闻</Link>
        {/*<Link to="/news/1">新闻1</Link>*/}
        {/*<Link to="/news/2">新闻2</Link>*/}

        <Route path="/" exact component={Cmp1}></Route>
        <Route path="/news" exact component={Cmp2}></Route>
        {/*<Route path="/news/:id" exact component={Cmp2}></Route>*/}
      </Router>
    )
    // return (
    //   <div className="App">
    //     姓名:{ JSON.stringify(this.props) }<br/>
    //     姓名:{ this.props.company.name }<br/>
    //     年龄: { this.props.age }<br/>
    //     cmp1: <Cmp1></Cmp1>
    //   </div>
    // );
  }
}

// export default App; //不需要了

// let connect_fn = connect(function() {});
// let Cmp = connect_fn(App);
// export default Cmp;

// 等价于

export default connect(function(state, props) {

  // return {
  //   ...state,
  //   name: [state.name, props.name]
  // }

  return state;
})(App);

