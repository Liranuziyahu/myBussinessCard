import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import WebIcon from '@mui/icons-material/Web';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import StorageIcon from '@mui/icons-material/Storage';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import '../../CSS/fonts.css'
import { useTheme } from '@mui/material/styles';

const About = () => {
  const theme = useTheme()

  const useStyles = makeStyles({
    root:{
      height:'100%',
      width:'100%',
    },
    titles:{
      fontSize:40,
      fontFamily:'Poppins, sans-serif',
      fontWeight:500,
      '& h4':{
        display:'inline-block',
        fontSize:'30px',
      } ,
    },  
    subtitle:{
      fontSize:'25px',
      fontFamily:'Poppins, sans-serif',
      fontWeight:500,
    },
    span:{
      color:'#04b4e0',
      fontWeight:600,
    },
    section:{
      display:'flex',
      width:'100%',
      height:'auto',
      flexWrap:'wrap',
      flexDirection:'',
      justifyContent: 'space-around',
      [theme.breakpoints.down('sm')]:{
        flexDirection:'column'
      }
    },
    columns:{
      display:'flex',
      flexDirection:'column',
    },
    textDecoration:{
      display:'flex',
      width:'50%',
      flexDirection:'column',
      alignItems: 'stretch',
      alignContent: 'space-around',
      flexWrap:'wrap',
      fontFamily:'Poppins, sans-serif',
      lineHeight: '1.65em',
      fontWeight:300,
      color:'#555',
      [theme.breakpoints.down('sm')]:{
        width:'100% !important',
        alignContent:'normal',
        marginBottom:15
      }
    },
    textColor:{
      color:'#555',
      fontSize:'20px'
    },
    marginBottom:{
      marginBottom:'10px'
    },
    cards:{
      width:'40%',
      marginTop:'50px',
      [theme.breakpoints.down('sm')]:{
        width:'100%'
      }
    }
  })

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.titles}>About<span className={classes.span}> Me</span></h2>
      <section className={classes.section}>
        <div className={classes.textDecoration + ' ' + classes.textColor}>
          <div>
              "Your smile is contagious – when you walk with a smile, you can make others smile too."
          </div>
          <div>
              I always carry this perspective, even now you are reading that with a smile 😃
          </div>
          <div>
              Hi everyone, my name is Liran and I'm a full-stack developer.
              My love for gaming started at a very young age, and as a result, my desire to learn and create grew within me.
              Already in high school, I chose to follow my heart and study computer science, and now, thankfully, I am after a full-stack course.
              Today I work as an IT professional and previously worked as a project manager in the technology field.
          </div>
          <div>
              Currently, <span className={classes.span}>I am looking for my next challenge</span> in the world of programming, my focus on the realm of the web.
              And today I am focusing on the following technologies: <div className={classes.span}>React.js , Vanilla JavaScript , Node.js , Express.js , MySQL</div> 
          </div>
       
       
        </div>
        <div className={classes.textDecoration} style={{width:"40%"}}>
          <div className={classes.marginBottom}>
            <span className={classes.span}>e-mail </span> <span> Liranuzistud@gmail.com</span>
          </div>
          <div className={classes.marginBottom}>
            <span className={classes.span}>Phone  </span> <span> 050-364-9949</span>
          </div>
          <div className={classes.marginBottom}>
            <span className={classes.span}>Residence  </span> <span> Tel-Aviv</span>
          </div>
          <div className={classes.marginBottom}>
            <span className={classes.span}>Age </span> <span> 25</span>
          </div>
        </div>
      </section>
        <h2 className={classes.titles}>What<span className={classes.span}> I Do</span></h2>
      <section className={classes.section}>
        <div className={classes.cards}>
          <WebIcon fontSize='large'/>
          <div className={classes.subtitle}>Website</div>
          <div className={classes.textColor}>Building a website , can be used to promote the business and showcase your products to the public. In addition, a website can improve the credibility and trustworthiness of the business in the eyes of customers and internet users.</div>
        </div>
        <div className={classes.cards}>
          <CloudSyncIcon fontSize='large'/>
          <div className={classes.subtitle}>Landing page</div>
          <div className={classes.textColor}>Building a landing page is for a standalone web page, created specifically for the purpose of a marketing or advertising campaign. It is designed to direct the visitor to take a specific action, such as making a purchase or filling out a form to receive more information.</div>
        </div>
        <div className={classes.cards}>
          <WysiwygIcon fontSize='large'/>
          <div className={classes.subtitle}>Webs systems</div>
          <div className={classes.textColor}>Building a system that is tailored to the customer, includes users, few dashboards, data display, and data analysis.</div>
        </div>
        <div className={classes.cards}>
          <StorageIcon fontSize='large'/>
          <div className={classes.subtitle}>Games</div>
          <div className={classes.textColor}>building simple games that include a leaderboard, login, and more.</div>
        </div>
        </section>  
     </div>
  )
}

export default About

