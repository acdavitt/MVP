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
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100
  },
  avatar: {
    height: 100,
    width: 100,
    marginRight: 10
  },
  snippet: {
    color: theme.palette.text.primary,
    marginRight: 20
  },
  icon: {
    fontSize: 40,
    color: theme.palette.text.primary,
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
    <ListItem button component={Link} href={poi.link} target="_blank" rel="noopener" alignItems="flex-start">
      <ListItemAvatar>
        <Avatar className={classes.avatar} alt={poi.name} src={poi.thumbnail} />
      </ListItemAvatar>
      <ListItemText
        disableTypography
        primary={<Typography variant="h5" className={classes.snippet}>{poi.name}</Typography>}
        secondary={<Typography variant="body1" className={classes.snippet}>{poi.snippet}</Typography>}
      />
       <ListItemSecondaryAction>
        <IconButton onClick={handleIconClick} aria-label="Delete place">
          <DeleteForeverIcon className={classes.icon}/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default UserList;