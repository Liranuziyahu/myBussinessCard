import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import Details from './Details';
import { useTheme } from '@mui/material/styles';

const Contact = () => {
    const theme = useTheme()
    const useStyles = makeStyles({
      root:{
          height:'90vh',
          width:'100%',
          [theme.breakpoints.down('sm')]:{
            height:'100%',
          }
         },
         titles:{
          fontSize:40,
          fontFamily:'Poppins, sans-serif',
          fontWeight:500,
        }, 
        span:{
          color:'#04b4e0',
          fontWeight:600,
        },
        groupSection:{
          display:'flex',
          width: '100%',
          minHeight: '79%',
          marginBottom:30,
          [theme.breakpoints.down('sm')]:{
            flexDirection: 'column',
            alignItems: 'center',
            alignContent: 'center'
          },
        }
      })

    const classes = useStyles();
  return (
    <div className={classes.root}>
        <div className={classes.titles}>Contact <span className={classes.span}> Me</span></div> 
        
        <div className={classes.groupSection}>
          <Form/>
          <Details/>
        </div>
    </div>
  )
}
export default Contact

