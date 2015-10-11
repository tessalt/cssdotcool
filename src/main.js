import React from 'react';
import styleObj from './data/styles';
import PropertyList from './components/property-list';
import ColorsList from './components/colors-list';
import Main from './components/main';
import Home from './components/home';
import Router from 'react-router';

var {Route, Link, RouteHandler} = Router;
const styles = Object.keys(styleObj);

let paths = styles.map(style => {
  return (<Route key={style} name={style} path=':style' handler={PropertyList}/> );
});

let routes = (
  <Route name='main' path='/' handler={Main}>
    <Route name="home" path='/' handler={Home} />
    <Route name='colors' path='colors' handler={ColorsList} />
    {paths}
  </Route>
)

Router.run(routes, (Handler, state) => {
  var params = state.params;
  React.render(<Handler params={params}/>, document.body);
});
