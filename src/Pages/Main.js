import React , {useState , useRef} from 'react'
import {Outlet} from 'react-router-dom'
import {Home , About , Portfolio , Resume ,Contact} from './index'
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
          position: 'fixed',
          top:'0',
          left:'0',
          bottom:'0',
          width: '10vw',
          height: '100vh',
      },
      profile:{
          position: 'fixed',
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
        width: 'auto',
        minWidth: '54vw',
        padding:20,
      },

    //Mobile
      rootMobile:{
        position: 'relative',
        minWidth: '100vw',
        minHeight: '100vh',
        overflow:'hidden',
      },
      NavbarMobile:{
        display: controlNavbar ? ' ' : 'none',
        height: '100vh',
        width: '100vw',
        overflow:'hidden',
        zIndex:!controlNavbar ? 99 : -1,
      },
      mainMobile:{
        position: 'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        width: '100%',
        height: '95%',
        zIndex:!controlNavbar ? 0 : -1,
        overflowY:'scroll',
      },
      sectionPage:{
        padding:35,
        overflow:'hidden',
      },
      menuHamburger:{
        display: !controlNavbar ? 'flex' : 'none',
        position: 'fixed',
        top:10,
        right:10,
        zIndex:90,
        borderRadius:'50%',
        padding:10,
        backgroundColor: '#04b4e0',
        height: '25px',
        width: '25px',
        justifyContent: 'center',
        alignItems: 'center',
      }
    });

    const classes = useStyles();



  return (
    <>
      {
        isMobile ? (
          <>
            <div className={classes.rootMobile}>
              <div className={classes.menuHamburger} onClick={() => setControlNavbar(true)}>< MenuIcon></MenuIcon></div>
              <div className={classes.NavbarMobile}><NavbarMobile props={{setControlNavbar}}/></div>
              <div className={classes.mainMobile}>
                <div id='About' className={classes.sectionPage}><About/></div>
                <div id='Resume' className={classes.sectionPage}><Resume/></div>
                <div id='Profolio' className={classes.sectionPage}><Portfolio/></div>
                <div id='Contact' className={classes.sectionPage}><Contact/></div>
              </div>
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

