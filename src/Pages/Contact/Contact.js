import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import Details from './Details';
import { useTheme } from '@mui/material/styles';

const Contact = () => {
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
        title:{
          fontFamily:'Roboto, sans-serif',
          fontWeight:600,
          fontSize:40,
          marginBottom:15
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
        <div className={classes.title}>Contact</div>
        <div className={classes.groupSection}>
          <Form/>
          <Details/>
        </div>
    </div>
  )
}

export default Contact

