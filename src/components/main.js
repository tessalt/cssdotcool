import React from 'react';
import styleObj from '../data/styles';
import Logo from './logo';
import {Link, RouteHandler} from 'react-router';

const styles = Object.keys(styleObj);

class Main extends React.Component {
  render() {
    let links = styles.map(style => {
      let params = {
        style: style
      }
      return (
        <li key={style} className="mb1">
          <Link to={style} params={params} className="white h5">{styleObj[style].title}</Link>
        </li>
      );
    });
    return (
      <div className="outer">
        <nav>
          <Link to='/'>
            <Logo />
          </Link>
          <ul className="list-reset">
            {links}
            <li className="mb1">
              <Link to='/colors' className="white h5">Colors</Link>
            </li>
            <li className="mb1">
              <Link to='/colorpicker' className="white h5">Colour Picker</Link>
            </li>
          </ul>
        </nav>
        <div className="main">
          <RouteHandler {...this.props}/>
        </div>
      </div>
    )
  }
}

export default Main;
