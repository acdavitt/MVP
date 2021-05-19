import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40
  },
  search: {
    position: 'relative',
    left: 1000,  //1350
    top: 5,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.secondary.dark, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.secondary.dark, 0.25),
    },
    width: '15%'
  },
  searchIcon: {
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const QueryForm = ({
  setAppCity
}) => {
  const classes = useStyles();
  const [city, setCity] = useState();

  const handleChange = (e) => {
    setCity(e.target.value);
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      setAppCity(city);
      setCity('');
    }
  }


  return (
    // <form noValidate autoComplete="off">
    //   <TextField id="outlined-basic" label="City Search" variant="outlined" />
    // </form>
    <div onKeyDown={handleEnter} className={classes.search}>
      <SearchIcon className={classes.searchIcon} />
      <InputBase
        className={classes.base}
        placeholder="City search..."
        onChange={handleChange}
      />
    </div>
  )
}

export default QueryForm;