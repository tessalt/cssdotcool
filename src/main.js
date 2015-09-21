import React from 'react';
import PropertyList from './components/property-list';

class Main extends React.Component {
  render() {
    var families = [
      'Verdana,Geneva,sans-serif',
      'Helvetica,Arial,sans-serif',
      '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
      '"Trebuchet MS", Helvetica, sans-serif',
      'Georgia,Utopia,Charter,serif',
      '"Times New Roman",Times,serif',
      '"Courier New",Courier,monospace',
      '"Palatino Linotype", "Book Antiqua", Palatino, serif',
      '"Comic Sans MS", cursive, sans-serif',
      'Impact, Charcoal, sans-serif'
    ];
    return <PropertyList collection={families} />
  }
}

React.render(<Main/>, document.getElementById('hello'));
