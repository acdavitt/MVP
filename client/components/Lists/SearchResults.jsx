import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import AddLocationIcon from '@material-ui/icons/AddLocation';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100
  }
}))

const SearchResults = () => {
  const classes = useStyles();
  return (
    <List className={classes.root}> Search Results
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="POI name" src="thumbnail" />
        </ListItemAvatar>
        <ListItemText
          primary="POI name"
          secondary={
            <>
              {"snippet"}
              {"link"}
            </>
          }
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="Add Location">
            <AddLocationIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

    </List>
  )
}

export default SearchResults;