import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import '../../CSS/fonts.css';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Form = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const useStyles = makeStyles({
    form:{
      display: 'flex',
      width:'100%',
      height: '100%',
      alignContent: isMobile ? 'center' : 'flex-start',
      flexDirection:'column',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    input:{
      display:'inline-block',
      marginRight:'13px',
      marginTop:'15px',
    },
    sendbtn:{
      width:'200px',
      height:'50px',
      backgroundColor: '#04b4e0',
      border: '0px',
      marginTop:15,
      borderRadius: '30px',
      padding:'15px 20px',
      fontSize:'19px',
      boxShadow:'0 10px 10px -8px rgb(0 0 0 / 22%)',
      fontFamily: 'Noto Serif Oriya, serif',
          "&:hover": {
              color:'#fff'
            }
    }
  })
  const classes = useStyles();
  return (
          <form>
            <FormControl onSubmit={(e)=>console.log('send')} style={{height: '100%'}}>
              <div className={classes.form}>
                <div className={classes.input}>
                  <TextField required id="outlined-helperText" label="First Name" size="small" style={{width:isMobile?'70vw':"29vw"}}/>
                </div>
                <div className={classes.input}>
                  <TextField required id="outlined-helperText" label="Last Name" size="small" style={{width:isMobile?'70vw':"29vw"}}/>
                </div>
                <div className={classes.input}>
                  <TextField required id="outlined-helperText" label="Email" type="email" size="small" style={{width:isMobile?'70vw':"29vw"}}/>
                </div>
                <div className={classes.input}>
                  <TextField required type="tel" id="outlined-helperText" label="Number" inputProps={{ pattern: "[0-9]{7,15}"}} size="small" style={{width:isMobile?'70vw':"29vw"}} placeholder="For Example : 0503649949"/>
                </div>
                <div className={classes.input}>
                  <TextField id="outlined-helperText" label="Company" size="small" style={{width:isMobile?'70vw':"29vw"}}/>   
                </div>
                <div className={classes.input}>
                  <TextField  id="outlined-multiline-static" label="Massage" multiline rows={2} style={{width:isMobile?'70vw':"29vw"}}/>              
                </div>
                <button type="submit" className={classes.sendbtn}>Submit</button>
              </div>
            </FormControl>

          </form>

  )
}

export default Form

