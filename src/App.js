import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Badges from './container/badges';
import themes from './config/themes';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={themes.themedefault}>
        <div className="App">
          <Badges />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
