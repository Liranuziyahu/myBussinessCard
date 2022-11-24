import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@mui/material/styles';



const Portfolio = () => {
  const theme = useTheme()
  const useStyles = makeStyles({
    root: {
      display: 'flex',
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  },
  })
    const classes = useStyles()

  return (
    <div className={classes.root}>
      <h1>
        Coming soon
      </h1>
    </div>
   
  )
}

export default Portfolio