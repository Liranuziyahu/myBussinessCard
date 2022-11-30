import React from 'react'
import Timeline from './Timeline'
import { makeStyles } from '@material-ui/core/styles';
import '../../CSS/fonts.css';
import { useTheme } from '@mui/material/styles';

const Resume = () => {
  const theme = useTheme() 
  const useStyles = makeStyles({
    root:{
      height:'95%',
      width:'100%',
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
      <h2>Resume</h2>
      <div>
        <h4>E X P E R I E N C E</h4>
        <div className={classes.timeline}>
          <Timeline props={{value:'Experience'}}/>
        </div>
      </div>
      <div>
        <h4>E D U C A T I O N</h4>
        <div className={classes.timeline}>
          <Timeline props={{value:'Education'}}/>
        </div>
      </div>
    </div>
  )
}
export default Resume
