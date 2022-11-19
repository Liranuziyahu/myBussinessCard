import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import Details from './Details';

const Contact = () => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
        <h2 className={classes.title}>Contact</h2>
        <div className={classes.groupSection}>
          <Form/>
          <Details/>
        </div>
    </div>
  )
}

export default Contact

const useStyles = makeStyles({

root:{
    padding:'20px',
    overflowY:'scroll',
    height:'100vh',
  },
  title:{
    fontFamily:'Roboto, sans-serif',
    fontWeight:600,
    fontSize:40
  },
  groupSection:{
    display:'flex',
    width: '100%',
  }
})