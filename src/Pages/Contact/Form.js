import React, { useRef , useState } from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import '../../CSS/fonts.css';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const captchaRef = useRef(null)
  const [textSent , setTextSent] = useState('')

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
    },
    textSent:{
      color:'green',
      fontWeight:'bold',
      fontSize:'14px',
      marginTop:15
    }
  })
  const classes = useStyles();
  const sumbitContact = (e) =>{
  e.preventDefault();
  const buttonSubmit =  e.target[12]
  const captchaToken = captchaRef.current.getValue();
  if(captchaToken)
    {
      buttonSubmit.disabled = true
      axios.post(process.env.REACT_APP_API_KEY,{name:e.target[0].value , email:e.target[2].value , phone:e.target[4].value,company:e.target[6].value,massage:e.target[8].value , date:Date()})
      .then((response) => {
          console.log('Contact sent');
          e.target[0].value=''
          e.target[2].value=''
          e.target[4].value=''
          e.target[6].value=''
          e.target[8].value=''
          captchaRef.current.reset();
          buttonSubmit.disabled = false;
          setTextSent('Message sent, thank you for contacting me!')
      })
      .catch(err => console.log(err))
    }
  else
    alert('Please declare that you are not a robot')
  }
  return (
          <form onSubmit={(e)=> sumbitContact(e)} >
            <FormControl style={{height: '100%'}}>
              <div className={classes.form}>
                <div className={classes.input}>
                  <TextField required id="outlined-helperText" label="Full Name" name='name' size="small" style={{width:isMobile?'70vw':"29vw"}}/>
                </div>
                <div className={classes.input}>
                  <TextField required id="outlined-helperText" label="Email" name='email' type="email" size="small"  style={{width:isMobile?'70vw':"29vw"}}/>
                </div>
                <div className={classes.input}>
                  <TextField type="tel" id="outlined-helperText" label="Number" name='phone' size="small" style={{width:isMobile?'70vw':"29vw"}} placeholder="For Example : 0503649949"/>
                </div>
                <div className={classes.input}>
                  <TextField id="outlined-helperText" label="Company" name='company' size="small" style={{width:isMobile?'70vw':"29vw"}}/>   
                </div>
                <div className={classes.input}>
                  <TextField  id="outlined-multiline-static" label="Massage" name='massage' multiline rows={2} style={{width:isMobile?'70vw':"29vw"}}/>              
                </div>
                 <div className={classes.input}>
                  <ReCAPTCHA
                    sitekey='6Lfz9jkjAAAAAD_mYiztmgE4iaPK3aATzhTUf-Y6'
                    ref={captchaRef}
                    />
                </div>
                <button type="submit" className={classes.sendbtn}>Submit</button>
                <div className={classes.textSent}>{textSent}</div>
              </div>
            </FormControl>

          </form>

  )
}

export default Form

