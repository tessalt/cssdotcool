import React from 'react';
import styleObj from './styles';
import PropertyList from './components/property-list';
import Router from 'react-router';
import Logo from './components/logo';

var {Route, Link, RouteHandler} = Router;

const styles = Object.keys(styleObj);

class Main extends React.Component {
  render() {
    let links = styles.map(style => {
      let params = {
        style: style
      }
      return <li className="mb1"><Link to={style} params={params} className="white h5">{style}</Link></li>;
    });
    return (
      <div className="outer">
        <nav>
          <Logo />
          <ul className="list-reset">
            {links}
          </ul>
        </nav>
        <main>
          <RouteHandler {...this.props}/>
        </main>
      </div>
    )
  }
}

let paths = styles.map(style => {
  return (<Route name={style} path=':style' handler={PropertyList}/> );
});

let routes = (
  <Route name='main' path='/' handler={Main}>
    {paths}
  </Route>
)

Router.run(routes, (Handler, state) => {
  var params = state.params;
  React.render(<Handler params={params}/>, document.body);
});
