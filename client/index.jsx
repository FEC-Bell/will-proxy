import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  background: #1b2838;
}

body {
  font-family: 'Roboto', sans-serif;
}
`;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <React.Fragment>
        <GlobalStyle>
          <div>
            <div id='reviews-graph'></div>
            <div id='description-placeholder'></div>
            <div id="photo-carousel"></div>
            <div id='dlc'></div>
            <div id='tags'></div>
            <div id='reviews'></div>
          </div>
        </GlobalStyle>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));