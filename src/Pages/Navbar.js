import React from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RoofingIcon from '@mui/icons-material/Roofing';
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap');
</style>


const NavBar = () => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.button}>
                <Link className={classes.icons} to='/home'><RoofingIcon fontSize='large'/></Link>
                <span className={classes.spans}>Home</span>
        </div>
        <div className={classes.button}>
                <Link className={classes.icons} to='/about'><PersonOutlineIcon fontSize='large'/></Link>
                <span className={classes.spans}>About</span>
        </div>
        <div className={classes.button}>
                <Link className={classes.icons} to='/Contact'><MailOutlineIcon fontSize='large'/></Link>
                <span className={classes.spans}>Contact</span>
        </div>
    </div>
  )
}

export default NavBar

const useStyles = makeStyles({
    root: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    button:{
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #f5f5f5',
        padding: '15px 0',
        width: '100%',
        height:'10%'
    },
    icons:{
        color:'#d2d3d4',
    },
    spans:{
        fontFamily:'Roboto, sans-serif',
        padding:'0px 5px',
        marginTop:'5px',
        fontWeight:300
    }
  });