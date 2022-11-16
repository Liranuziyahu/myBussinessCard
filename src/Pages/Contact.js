import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;500&display=swap');
</style>

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Contact</h2>
        <FormControl >
          <form onSubmit={(e)=>console.log('send')}>
            <div className={classes.form}>
              <div className={classes.input}>
                <TextField required id="outlined-helperText" label="First Name" size="small"/>
              </div>
              <div className={classes.input}>
                <TextField required id="outlined-helperText" label="Last Name" size="small"/>
              </div>
              <div className={classes.input}>
                <TextField required id="outlined-helperText" label="Number" size="small"/>
              </div>
              <div className={classes.input}>
                <TextField required id="outlined-helperText" label="Comapny Name" size="small"/>
              </div>
              <div className={classes.input}>
                <TextField required id="outlined-helperText" label="First Name" size="small"/>   
              </div>
              <div className={classes.input}>
                <TextField  id="outlined-multiline-static" label="Massage" multiline rows={4}/>              
              </div>
              <button type="submit" className={classes.sendbtn}>Submit</button>
            </div>
          </form>
        </FormControl>
      </div>

  )
}

export default Contact

const useStyles = makeStyles({
  root:{
    height: 'auto',
    padding:'50px'
  },
  title:{
    fontFamily:'Roboto, sans-serif',
    fontWeight:600,
    fontSize:40
  },
  form:{
    display: 'flex',
    width:'60%',
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  input:{
    margin:'5px'
  },
  sendbtn:{
    border:'2px solid #04b4e0',
    width:'200px',
    height:'50px',
    borderRadius: '30px',
    marginTop: '30px',
    backgroundColor: 'transparent',
  }
})