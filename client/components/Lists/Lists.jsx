import React from 'react';
import SearchResults from './SearchResults';
import UserList from './UserList';
import Grid from '@material-ui/core/Grid';

const Lists = () => {
  return (
  <>
    <Grid item xs={6}>
      <SearchResults></SearchResults>
    </Grid>
    <Grid item xs={6}>
      <UserList></UserList>
    </Grid>
  </>
  )
}

export default Lists;