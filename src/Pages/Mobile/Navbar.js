import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import avatar from '../../imgs/avatar.jpg';
import CvResume from './../../files/Liran Uziyahu Developer.pdf'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import Links from './Links';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from "@mui/material/styles";

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap');
</style>

const Profile = ({props}) => {
const theme = useTheme()
const useStyles = makeStyles({
    root: {
        display: 'flex',
        position:'relative',
        width: '100%',
        height: '100%',
        overflow:'hidden',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: 'white',
        backgroundColor: '#04b4e0',
        float:'right',
        paddingTop:20,
        animation:`$OpenNavbar 1000ms ${theme.transitions.easing.easeInOut}`
    },
    "@keyframes OpenNavbar": {
      "0%": {
        width: '80%',
      },
      "100%": {
        width:'100%',
      }
    },
    buttons:{
        display:'flex',
        width: '50%',
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center',
    },
    about:{
        display:'flex',
        width:'100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar:{
        width: '150px',
        height:'150px',
        borderRadius:'50%',
        border: '3px solid #fff',
    },
    name:{
        fontSize:'26px',
        fontFamily:'Poppins, sans-serif',
        lineHeight:'1em',
        fontWeight:600,
        margin: 0,
        textAlign: 'center',
        marginTop:20
    },
    role:{
        fontFamily:'Poppins, sans-serif',
        fontSize:'20px',
        fontWeight:300
    },
    resume:{
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
        margin:'20px 0px',
        textDecoration:'none',
            "&:hover": {
                backgroundColor: '#fff',
                color:'#04b4e0'
              }
    },
    close:{
        position: 'absolute',
        top:20,
        left:'90%'
    }
  });
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <CloseIcon className={classes.close} onClick={() => props.setControlNavbar(controller => !controller)} />
        <div className={classes.about}>
        <img className={classes.avatar} src={avatar} alt='Liran emoji'></img>
            <h2 className={classes.name}>Liran Uziyahu</h2>
            <h4 className={classes.role}>Web Developer</h4>
            <Links props={{setControlNavbar:props.setControlNavbar}}/>
            <div className={classes.buttons}>
            <IconButton style={{color:'white'}} onClick={() => window.open('https://www.linkedin.com/in/liran-uziyahu/')}>
                <LinkedInIcon fontSize='large'/>
            </IconButton>
            <IconButton style={{color:'white'}} onClick={() => window.open('https://github.com/Liranuziyahu')}>
                <GitHubIcon fontSize='large'/> 
            </IconButton>
            <IconButton style={{color:'white'}} onClick={() => window.open('mailto:Liranuzistud@gmail.com')}>
                <EmailIcon fontSize='large'/>
            </IconButton>
            </div>
            <a className={classes.resume} href={CvResume} download="Liran Uziyahu Developer">Download CV</a>
        </div>
    </div>
  )
}

export default Profile

