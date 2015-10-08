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
          </ul>
        </nav>
        <main>
          <RouteHandler {...this.props}/>
        </main>
      </div>
    )
  }
}

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>Hello World!</h1>
        <h2>&larr; Add some Style with CSS Properties</h2>
      </div>
    )
  }
}

let paths = styles.map(style => {
  return (<Route key={style} name={style} path=':style' handler={PropertyList}/> );
});

let routes = (
  <Route name='main' path='/' handler={Main}>
    <Route name="home" path='/' handler={Home} />
    {paths}
  </Route>
)

Router.run(routes, (Handler, state) => {
  var params = state.params;
  React.render(<Handler params={params}/>, document.body);
});
