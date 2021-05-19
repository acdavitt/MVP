import React, { useState, useEffect } from 'react';
import SearchResults from './SearchResults';
import UserList from './UserList';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100
  }
}))


const Lists = ({ pois }) => {
  const classes = useStyles();

  return (
  <>
    <Grid item xs={6}>
      <List className={classes.root}> Search Results
        <SearchResults />
      </List>
    </Grid>
    <Grid item xs={6}>
      <UserList></UserList>
    </Grid>
  </>
  )
}

export default Lists;