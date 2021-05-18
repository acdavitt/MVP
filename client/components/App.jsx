import React from 'react';
import axios from 'axios';
import config from '../../secrets.js';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Lists from './Lists/Lists.jsx';
import QueryForm from './QueryForm.jsx';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#bbfcfc',
      main: '#bbfcfc',
      dark: '#bbfcfc',
      contrastText: '#000030',
    },
    secondary: {
      light: '#000030',
      main: '#000030',
      dark: '#000030',
      contrastText: '#bbfcfc',
    },
    text: {
      primary: '#000030',
      secondary: '#000030',
    },
    background: {
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <QueryForm></QueryForm>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid container spacing={10}>
            <Lists></Lists>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default App;