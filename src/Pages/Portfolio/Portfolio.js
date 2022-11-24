import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@mui/material/styles';



const Portfolio = () => {
  const theme = useTheme()
  const useStyles = makeStyles({
    root:{
      height:'100%',
      [theme.breakpoints.down('sm')]:{
        marginBottom:100,
        // overflowY:'scroll',
      },
    }
  })
    const classes = useStyles()

  return (
    <div className={classes.root}>
      <h1 style={{display:'flex',justifyContent: 'center',alignItems: 'center',height: '100%'}}>
        Coming soon
      </h1>
    </div>
   
  )
}

export default Portfolio