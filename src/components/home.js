import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>Hello World!</h1>
        <h2><span className='arrow'>&larr;</span> Add some Style with CSS Properties</h2>
        <p><a className="orange" href="https://github.com/tessalt/cssdotcool">Contribute to CSS.cool on Github</a></p>
      </div>
    )
  }
}

export default Home;
