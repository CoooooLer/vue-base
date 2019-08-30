import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Mod1 from './Cmp2_1';
import Mod2 from './Cmp2_2';

class Cmp2 extends React.Component{
  constructor(...args) {
    super(...args);

    this.state = {
      data: '1'
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let old_id = prevProps.match.params.id;
    let id = this.props.match.params.id;
    if(id != old_id) {
      console.log('更新id')
      this.setState({
        data: id == 1 ? '1111' : '2222'
      });
    }

  }

  render() {
    console.log(this.props.match.path)
    const path = this.props.match.path;

    return (
      <div>
        { this.state.data }
        <h2>新闻</h2>

        <Router>
          <Link to={ `${path}/guoji` }>国际</Link>
          <Link to={ `${path}/shehui` }>社会</Link>

          <Route path={ `${path}/guoji` } component={Mod1}></Route>
          <Route path={ `${path}/shehui` } component={Mod2}></Route>
        </Router>
      </div>

    )
  }

}

export default Cmp2;
