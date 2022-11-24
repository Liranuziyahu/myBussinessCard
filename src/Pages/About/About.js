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
      [theme.breakpoints.down('sm')]:{
        height:'90%',
        overflowY:'scroll',
        padding:20
      },
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
      <h2 
        className={classes.titles}>About<span className={classes.span}> Me</span>
      </h2>
      <section className={classes.section}>
        <div className={classes.textDecoration + ' ' + classes.textColor}>
        Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue elit vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex justo, faucibus ut mi in, condimentum finibus dolor. Aliquam vitae hendrerit dolor, eget imperdiet mauris. Maecenas et ante id ipsum condimentum dictum et vel massa. Ut in imperdiet dolor, vel consectetur dui.
        </div>
        <div className={classes.textDecoration} style={{width:"40%"}}>
          <div className={classes.marginBottom}>
            <span className={classes.span}>Age </span> <span> 25</span>
          </div>
          <div className={classes.marginBottom}>
            <span className={classes.span}>Residence  </span> <span> Tel-Aviv</span>
          </div>
          <div className={classes.marginBottom}>
            <span className={classes.span}>e-mail </span> <span> Liranuzistud@gmail.com</span>
          </div>
          <div className={classes.marginBottom}>
            <span className={classes.span}>Phone  </span> <span> 050-364-9949</span>
          </div>
        </div>
      </section>
      <div className={classes.titles}>
        <h4>What<span className={classes.span}> I Do</span>
        </h4>
      </div>
        
      <section className={classes.section}>
        <div className={classes.cards}>
          <WebIcon fontSize='large'/>
          <div className={classes.subtitle}>Webs</div>
          <div className={classes.textColor}>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</div>
        </div>
        <div className={classes.cards}>
          <WysiwygIcon fontSize='large'/>
          <div className={classes.subtitle}>Webs systems</div>
          <div className={classes.textColor}>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</div>
        </div>
        <div className={classes.cards}>
          <StorageIcon fontSize='large'/>
          <div className={classes.subtitle}>Ecommerce</div>
          <div className={classes.textColor}>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</div>
        </div>
        <div className={classes.cards}>
          <CloudSyncIcon fontSize='large'/>
          <div className={classes.subtitle}>Ecommerce</div>
          <div className={classes.textColor}>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</div>
        </div>
        </section>  
     </div>
  )
}

export default About

