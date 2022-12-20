import React , {useRef} from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import '../../CSS/fonts.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const Links = ({props}) => {
    const LinksControl = useRef(null);
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const useStyles = makeStyles({
        root: {
            display: 'flex',
            width: '80%',
            height: '35%',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'stretch',
            margin:'10px'
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

     const Navigation = ( ref => {
      document.getElementById(ref).scrollIntoView({behavior: 'smooth'})
  }
      )
  return (
    <div className={classes.root} ref={LinksControl}>
        <div className={classes.button} style={{textDecoration: 'none'}} onClick={() => {focuseLink(0); Navigation('About'); props.setControlNavbar(false);}}>
                <span className={classes.spans}>About</span>
        </div>
        <div className={classes.button} style={{textDecoration: 'none'}} onClick={() => {focuseLink(1); Navigation('Resume'); props.setControlNavbar(false);}}>
                <span className={classes.spans}>Resume</span>
        </div>
        <div className={classes.button}  style={{textDecoration: 'none'}} onClick={() => {focuseLink(2); Navigation('Contact'); props.setControlNavbar(false); }}>
                <span className={classes.spans}>Contact</span>
        </div>
        <div className={classes.button}  style={{textDecoration: 'none'}} onClick={() => {focuseLink(3); Navigation('Profolio'); props.setControlNavbar(false); }}>
                <span className={classes.spans}>Portfolio</span>
        </div>
    </div>
  )
}

export default Links

