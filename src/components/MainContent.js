import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fullWidth: {
    width: '100%',
  },
}));

function MainContent() {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>
      <div className={classes.toolbar} />
      <div className={classes.title}>
        <Typography variant='h4'>Arise Awake Stop Not Till The Goal Is Reached</Typography>
      </div>
      <div className={classes.content}>
        <Typography paragraph>
        Swami Vivekananda believed that if the human beings are persistent enough, they have the potential to overcome any hurdle, when he said, “Arise! Awake! And stop not until the goal is reached”. This is a golden teaching by Swami Vivekananda where he insisted that persistence is the only key to success.
       <br/>
       It is very common for a lot of us to give up on our beliefs and dreams if we fail in achieving them at once because of certain inconveniences and hurdles we come across. But, if we have the courage to fight back and stick to our goal, nothing can stop us from succeeding in it. So, it does not matter if we fail repeatedly as long as we are persistent without having the urge to deviate from the goal.
        </Typography>
      </div>
    </main>
  );
}

export default MainContent;