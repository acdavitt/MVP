import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100
  }
}))

const UserList = ( {poi, userPois, setUserPois} ) => {
  const classes = useStyles();

  const handleIconClick = (e) => {
    let copy = userPois.slice();
    let index = copy.findIndex(site => site.name === poi.name);
    copy.splice(index, 1);
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
        <IconButton onClick={handleIconClick} aria-label="Delete place">
          <DeleteForeverIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default UserList;