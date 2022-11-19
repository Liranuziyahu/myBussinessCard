import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;500&display=swap');
</style>

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          <h2 className={classes.name}>Liran Uziyahu</h2>
          <h4 className={classes.role}>Full Stack Developer</h4>
    </div>
  )
}

const useStyles = makeStyles({
  root: {
      display: 'flex',
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  },
    name:{
        fontSize:'60px',
        fontFamily:'Roboto, sans-serif',
        lineHeight: '74px',
        fontWeight:500,
        margin: 0,
        color:'#222'
    },
    role:{
      color:'#888',
      fontSize:'20px',
      fontFamily:'Roboto, sans-serif',
      fontWeight:100
    }
});


export default Home