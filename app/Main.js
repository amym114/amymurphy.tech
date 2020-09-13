import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, withRouter } from 'react-router-dom';
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import Page from './components/Page';
import StateContext from './StateContext';
import DispatchContext from './DispatchContext';
import { useImmerReducer } from 'use-immer';

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
      fontSize: '1.5rem',
      fontWeight: 300,
    },
  },
});

const App = () => {
  const initialState = {
    mobileIsOpen: false,
  };

  const appReducer = React.useCallback((draft, action) => {
    switch (action.type) {
      //STEP 2 - Select a Power Unit/Deck
      case 'setMobileIsOpen':
        console.log('setting mobile open');
        draft.mobileIsOpen = action.value;
        break;
    }
  });

  const [state, dispatch] = useImmerReducer(appReducer, initialState);

  // theme = responsiveFontSizes(theme);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <HashRouter>
          <ThemeProvider theme={theme}>
            <Page />
          </ThemeProvider>
        </HashRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));

if (module.hot) {
  module.hot.accept();
}
