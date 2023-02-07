import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseIcon from '@mui/icons-material/Close';
import CvResume from './../../files/Liran Uziyahu.pdf'
import avatar from '../../imgs/avater3.jpg'
import '../../CSS/fonts.css'
import {Link} from 'react-router-dom'

const Popup = ({props}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const useStyle = makeStyles({
        root:{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems:  isMobile?'flex-end':'center',
            position: 'relative',
        },
        section:{
            position: 'relative',
            width: '500px',
            height: isMobile?'70vh':'500px',
            backgroundColor: '#04b4e0',
            borderRadius:   isMobile?'30px 30px 0px 0px' :'30px',
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        close:{
            position: 'absolute',
            top:15,
            right:15,
            borderRadius: '50%',
            border:'2px solid black',
            "&:hover": {
                backgroundColor: "red",
                color: "white"
              },
        },
        avatar: {
          width: '160px',
          height:'160px',
          borderRadius:'50px',
          border: '3px solid #fff',
          backgroundSize:'cover',
          backgroundPosition: 'bottom',
          boxShadow:'0 10px 10px -8px rgb(0 0 0 / 22%)',

        },
        text:{
          color: 'white',
          width: '80%',
          fontSize: '18px',
          fontWeight:500,
          lineHeight: '1.7rem',
          fontFamily: 'DM Sans, sans-serif',

        },
        groupButtons:{
          display:'flex',
        },
        button:{
          padding: '0.8em 2.1em',
          border: '2px solid white',
          borderRadius: '30px',
          backgroundColor:'transparent',
          color:'white',
          padding:'15px 20px',
          fontSize:'18px',
          boxShadow:'0 10px 10px -8px rgb(0 0 0 / 22%)',
          fontFamily:'Poppins, sans-serif',
          fontWeight:300,
          marginTop:'-30px',
          marginLeft:10,
          textDecoration:'none',
              "&:hover": {
                  backgroundColor: 'rgba(0, 255, 0,0.6)',  
                }
        }
    })
    const classes = useStyle();
    const Navigation = ( ref => {
      document.getElementById(ref).scrollIntoView({behavior: 'smooth'})
  }
    )

  return (
    <div className={classes.root}>
       <div className={classes.section}>
            <CloseIcon fontSize='medium' className={classes.close} onClick={()=> props.setPopup(false)}/>
            <img className={classes.avatar} src={avatar} alt='Let me Know'></img>
            <div className={classes.text}>
              After getting to know me, I would love to get to know you too.
              Feel free to talk to me in any of the following ways: through message me, over the phone, or even in person if that's possible. 
            </div>
           <div className={classes.groupButtons}>
              <a className={classes.button} href={CvResume} download="Liran Uziyahu Developer">Download CV</a>
             {
              isMobile ? 
              (
                <div className={classes.button} onClick={()=> {Navigation('Contact'); props.setPopup(false)}}>
                  Contact me
                </div>
              ) : 
              (
                <Link to={'/Contact'}  className={classes.button} onClick={()=> {props.setPopup(false)}}>Contact Me</Link>
              )
             }
           </div>
       </div>
    </div>
  )
}

export default Popup