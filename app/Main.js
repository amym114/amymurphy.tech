import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, withRouter } from 'react-router-dom';
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Page from './components/Page';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3D4B51',
    },
    text: {
      primary: '#3D4B51',
    },
  },
  typography: {
    fontFamily: 'Alegreya, Times, Georgia, serif',
    fontSize: 30,
    h1: {
      fontFamily: 'Montserrat, Helvetica, Arial, sans',
      fontSize: '3rem',
      fontWeight: 800,
    },
    body2: {
      fontSize: '1.1rem',
    },
    h2: {
      fontFamily: 'Montserrat, Helvetica, Arial, sans',
      fontSize: '1.5rem',
      fontWeight: 800,
    },
    h3: {
      fontFamily: 'Montserrat, Helvetica, Arial, sans',
      fontSize: '1.5rem',
      fontWeight: 300,
    },
    h4: {
      fontFamily: 'Alegreya, Times, Georgia, serif',
      fontSize: 20,
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'Montserrat, Helvetica, Arial, sans',
      fontSize: '1.3rem',
      fontWeight: 300,
    },
  },
});

// theme = responsiveFontSizes(theme);

const App = () => {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Page />
      </ThemeProvider>
    </HashRouter>
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));

if (module.hot) {
  module.hot.accept();
}
