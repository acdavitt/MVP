import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../secrets.js';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles((theme) => ({
  placeholder: {
    marginTop: 400,
    fontFamily: 'Handlee',
    fontSize: 75,
    color: '#000030',
  },
  header: {
    fontFamily: 'Handlee',
    fontSize: 75,
    color: '#000030',
    margin: 0,
  }
}))

const icons = [<i className="fas fa-umbrella-beach"></i>, <i className="fas fa-archway"></i>, <i className="fas fa-plane-departure"></i>, <i className="fas fa-globe-americas"></i>, <i class="fas fa-luggage-cart"></i>, <i class="fas fa-map"></i>, <i class="fas fa-passport"></i>]

const App = () => {
  const classes = useStyles();
  const [city, setAppCity] = useState('');
  const [pois, setPois] = useState([])
  const [icon, setIcon] = useState([icons[0]])

  useEffect(() => {
    const getCityPois = async (city) => {
      const poisForCity = await axios.get(`/cities/${city}`);
      setPois(poisForCity.data);
    }
    if (city) {
      getCityPois(city);
    }
  }, [city])

  useEffect(()=> {
    let i = 0;
    const rotateIcon = () => {
      i++;
      if (i === icons.length) {
        i = 0;
      }
      setIcon(icons[i]);
    };
    setInterval(rotateIcon, 1000)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar>
          <QueryForm setAppCity={setAppCity}></QueryForm>
          <h1 className={classes.header}>Sight on Sites</h1>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          {pois.length ? <Lists pois={pois[0].pois} city={city}></Lists> : <p className={classes.placeholder}>Where do you want to go? {icon}</p>}
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default App;