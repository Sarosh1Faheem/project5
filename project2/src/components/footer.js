import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
      marginTop: '285px'
  },
});

export default function FootNav({ScreenConfig}) {
  const classes = useStyles();

  return (
    <BottomNavigation
      value={ScreenConfig[0]}
      onChange={(event, newValue) => {
        console.log(newValue)
        ScreenConfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Country" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Global Graph" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
