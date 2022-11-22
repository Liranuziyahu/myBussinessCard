import React , {useRef} from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import '../../CSS/fonts.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const NavbarMobile = ({props}) => {
    const LinksControl = useRef(null);
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    console.log(props.setControlNavbar)
    const useStyles = makeStyles({
        root: {
            display: 'flex',
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'stretch',
        },
        button:{
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '15px 0',
            width: '100%',
            height: isMobile ? 30 :'10%',
        },
        spans:{
            fontFamily:'Poppins, sans-serif',
            padding:'0px 5px',
            marginTop:'5px',
            fontWeight:500,
            color:'#fff',
        }
      });
      const classes = useStyles();


      const focuseLink = (index)=>{
        let linksControl = Object.values(LinksControl?.current?.children);
        linksControl?.map((link,i) => {
          if(i == index)
           {
                link.style.backgroundColor='rgba(22, 32, 10, 0.07)';
                link.children[0].style.fontWeight='600'
           }
          else
            {
                link.style.backgroundColor = ''
                link.children[0].style.fontWeight='500'
            }
        })
     }
    
  return (
    <div className={classes.root} ref={LinksControl}>
        <Link className={classes.button} to='/' style={{textDecoration: 'none',backgroundColor:'rgba(22, 32, 10, 0.07)' }} onClick={() => {focuseLink(0); props.setControlNavbar(false)}}>
                <span className={classes.spans} style={{fontWeight:'600'}}>Home</span>
        </Link>
        <Link className={classes.button} to='/about' style={{textDecoration: 'none'}} onClick={() => {focuseLink(1); props.setControlNavbar(false)}}>
                <span className={classes.spans}>About</span>
        </Link>
        <Link className={classes.button} to='/Resume' style={{textDecoration: 'none'}} onClick={() => {focuseLink(2); props.setControlNavbar(false)}}>
                <span className={classes.spans}>Resume</span>
        </Link>
        <Link className={classes.button} to='/Contact' style={{textDecoration: 'none'}} onClick={() => {focuseLink(3); props.setControlNavbar(false)}}>
                <span className={classes.spans}>Contact</span>
        </Link>
        <Link className={classes.button} to='/Portfolio' style={{textDecoration: 'none'}} onClick={() => {focuseLink(4); props.setControlNavbar(false)}}>
                <span className={classes.spans}>Portfolio</span>
        </Link>
    </div>
  )
}

export default NavbarMobile

