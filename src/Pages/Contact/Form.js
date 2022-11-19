import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import '../../CSS/fonts.css';

const Form = () => {
  const classes = useStyles();
  return (
          <form onSubmit={(e)=>console.log('send')}>
            <FormControl style={{height: '100%'}}>
              <div className={classes.form}>
                <div className={classes.input}>
                  <TextField required id="outlined-helperText" label="First Name" size="small" style={{width:"29vw"}}/>
                </div>
                <div className={classes.input}>
                  <TextField required id="outlined-helperText" label="Last Name" size="small" style={{width:"29vw"}}/>
                </div>
                <div className={classes.input}>
                  <TextField required id="outlined-helperText" label="Email" size="small" style={{width:"29vw"}}/>
                </div>
                <div className={classes.input}>
                  <TextField id="outlined-helperText" label="Number" size="small" style={{width:"29vw"}}/>
                </div>
                <div className={classes.input}>
                  <TextField id="outlined-helperText" label="Company" size="small" style={{width:"29vw"}}/>   
                </div>
                <div className={classes.input}>
                  <TextField  id="outlined-multiline-static" label="Massage" multiline rows={4} style={{width:"29vw"}}/>              
                </div>
                <button type="submit" className={classes.sendbtn}>Submit</button>
              </div>
            </FormControl>

          </form>

  )
}

export default Form

const useStyles = makeStyles({
  form:{
    display: 'flex',
    width:'100%',
    height: '100%',
    alignContent: 'flex-start',
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