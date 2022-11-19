import React from 'react'
import {Outlet ,Link} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile'
import { makeStyles } from '@material-ui/core/styles';

const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.navbar}><Navbar></Navbar></div>
      <div className={classes.profile}><Profile/></div>
      <div className={classes.main}><Outlet></Outlet></div>
    </div> 
  )
}
export default Main

const useStyles = makeStyles({
  root:{
    position: 'relative',
    display: 'flex',
    overflow:'hidden',
  },
  navbar: {
        position: 'sticky',
        top:'0',
        left:'0',
        bottom:'0',
        width: '6vw',
        height: '100vh',
    },
    profile:{
        position: 'sticky',
        display:'inline-block',
        top:'0',
        left:'6vw',
        bottom:'0',
        width: '30vw',
        height: '100vh',
        backgroundColor: '#04b4e0'
    },
    main:{
      position: 'absolute',
      top:'0',
      left:'36vw',
      width: '64vw',
      height: '100vh',
    }
  });