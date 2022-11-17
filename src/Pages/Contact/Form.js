import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;500&display=swap');
</style>

const Form = () => {
  const classes = useStyles();
  return (
        <FormControl >
          <form onSubmit={(e)=>console.log('send')}>
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
          </form>
        </FormControl>

  )
}

export default Form

const useStyles = makeStyles({
  form:{
    display: 'flex',
    width:'60vw',
    height:'50vh',
    alignContent: 'flex-start',
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  input:{
    display:'inline-block',
    marginRight:'3px',
    marginTop:'15px'
  },
  sendbtn:{
    width:'200px',
    height:'50px',
    marginTop: '30px',
    backgroundColor: 'transparent',
    border: '1px solid white',
    borderRadius: '30px',
    padding:'15px 20px',
    fontSize:'18px',
    boxShadow:'0 10px 10px -8px rgb(0 0 0 / 22%)',
    fontFamily:'Poppins, sans-serif',
    fontWeight:300,
        "&:hover": {
            backgroundColor: 'rgb(7, 177, 77, 0.42)',
            color:'#fff'
          }
  }
})