import React , {useState} from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile'
import NavbarMobile from './Mobile/Navbar'
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Main = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [controlNavbar , setControlNavbar] = useState(false);
  
  const useStyles = makeStyles({
    root:{
      display: 'flex',
      overflow:'hidden',
    },
    navbar: {
          position: 'sticky',
          top:'0',
          left:'0',
          bottom:'0',
          width: '10vw',
          height: '100vh',
      },
      profile:{
          position: 'sticky',
          display:'inline-block',
          top:'0',
          left:'10vw',
          bottom:'0',
          width: '30vw',
          height: '100vh',
          backgroundColor: '#04b4e0'
      },
      main:{
        position: 'absolute',
        top:'0',
        left:'40vw',
        width: '58vw',
        maxHeight: '120vh',
        height: '95vh',
        marginLeft: '20px',
        marginBottom: '20px',
        overflowY:'scroll',
        margin:20
      },

    //Mobile
      rootMobile:{
        position: 'relative',
        width: '100%',
        height: '100%',
      },
      NavbarMobile:{
        display: controlNavbar ? ' ' : 'none',
        height: '100%',
        width: '100%',
        overflow:'hidden',
        zIndex:99,
      },
      mainMobile:{
        position:'absolute',
        left:0,
        right:0,
        top:0,
        padding:30,
        display: !controlNavbar ? ' ' : 'none',
        overflow:'hidden',
      },
      menuHamburger:{
        position: 'absolute',
        display: !controlNavbar ? ' ' : 'none',
        right:20,
        top:20,
        zIndex:90,
        borderRadius:'50%',
        padding:10,
        backgroundColor: '#04b4e0',
      }
    });


    const classes = useStyles();

  return (
    <>
      {
        isMobile ? (
          <>
            <div className={classes.rootMobile}>
              <div className={classes.menuHamburger} onClick={() => setControlNavbar(true)}><MenuIcon></MenuIcon></div>
              <div className={classes.NavbarMobile}><NavbarMobile props={{setControlNavbar}}/></div>
              <div className={classes.mainMobile}><Outlet></Outlet></div>
            </div>
          </> 
        )
        : //Desktop
        (
          <div className={classes.root}>
            <div className={classes.navbar}><Navbar></Navbar></div>
            <div className={classes.profile}><Profile/></div>
            <div className={classes.main}><Outlet></Outlet></div>
          </div>
        )
      }
    </>
   
  )
}
export default Main

