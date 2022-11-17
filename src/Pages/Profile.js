import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import emoji from '../imgs/emoji.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap');
</style>

const Profile = () => {
const classes = useStyles();

  return (
    <div className={classes.root}>
        <img className={classes.emoji} src={emoji} alt='Liran emoji'></img>
        <div className={classes.about}>
            <h2 className={classes.name}>Liran Uziyahu</h2>
            <h4 className={classes.role}>Web Developer</h4>
            <div className={classes.buttons}>
            <LinkedInIcon fontSize='large' onClick={() => window.open('https://www.linkedin.com/in/liran-uziyahu/')}/>
            <GitHubIcon fontSize='large' onClick={() => window.open('https://www.linkedin.com/in/liran-uziyahu/')}/> 
            <EmailIcon fontSize='large' onClick={() => window.open('mailto:Liranuzistud@gmail.com')}/>
            </div>
        </div>
        <button className={classes.resume}>Download CV</button>
    </div>
  )
}

export default Profile

const useStyles = makeStyles({
    root: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: 'white',
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
        marginTop:'-45px'
    },
    emoji:{
        width: '200px',
        height: '200px',
        borderRadius:'50%',
        border: '3px solid #fff'
    },
    name:{
        fontSize:'36px',
        fontFamily:'Poppins, sans-serif',
        lineHeight:'1em',
        fontWeight:600,
        margin: 0,
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
        marginTop:'-30px',
       
            "&:hover": {
                backgroundColor: '#fff',
                color:'#04b4e0'
              }
    
    }
  });