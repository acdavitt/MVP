import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100
  }
}))


const UserList = ( {poi} ) => {

  const classes = useStyles();

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
    </ListItem>
  )
}

export default UserList;