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


const UserList = () => {

  const classes = useStyles();

  return (
    <List className={classes.root}>Saved Places
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
      </ListItem>

    </List>
  )
}

export default UserList;