import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../secrets.js';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';

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
  const [city, setCity] = useState();
  const [pois, setPois] = useState()

  const getCityPois = async () => {
    let poisForCity = await axios.get(`/cities/${city}`);
    return poisForCity.data;
  }

  useEffect(() => {
    setPois(getCityPois());
  }
  //  async function getCityPois() {
  //     let poisForCity = await axios.get('/cities', city);
  //     setPois(poisForCity.data)
  //   }

  ,[city])

  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar>
          <QueryForm setCity={setCity} getCityPois={getCityPois}></QueryForm>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Lists pois={pois}></Lists>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default App;