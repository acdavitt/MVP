import React, { useState } from 'react';
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

const SearchResults = ({ poi, userPois, setUserPois}) => {
  const classes = useStyles();

  const handleIconClick = (e) => {
    let copy = userPois.slice();
    copy.push(poi);
    setUserPois(copy);
    localStorage.setItem('userPois', JSON.stringify(copy));
  }

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={poi.name} src={poi.thumbnail} />
      </ListItemAvatar>
      <ListItemText
        primary={poi.name}
        secondary={
          <>
            {`${poi.snippet}\n${poi.link}`}
          </>
        }
      />
      <ListItemSecondaryAction>
        <IconButton onClick={handleIconClick} aria-label="Add Location">
          <AddLocationIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default SearchResults;