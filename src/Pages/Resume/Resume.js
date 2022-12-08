import React from 'react'
import Timeline from './Timeline'
import { makeStyles } from '@material-ui/core/styles';
import '../../CSS/fonts.css'
import { useTheme } from '@mui/material/styles';

const Resume = () => {
  const theme = useTheme() 
  const useStyles = makeStyles({
    root:{
      height:'95%',
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
    timeline:{
      width:'100%',
      [theme.breakpoints.down('sm')]:{
        marginLeft:-35
      }
    }
  })
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div>
        <h2 className={classes.titles}>Experience</h2>
        <div className={classes.timeline}>
          <Timeline props={{value:'Experience'}}/>
        </div>
      </div>
      <div>
      <h2 className={classes.titles}>Education</h2>
        <div className={classes.timeline}>
          <Timeline props={{value:'Education'}}/>
        </div>
      </div>
    </div>
  )
}
export default Resume
