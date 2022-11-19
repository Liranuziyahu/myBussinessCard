import React from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RoofingIcon from '@mui/icons-material/Roofing';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import '../../CSS/fonts.css';


const NavBar = () => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
        <Link className={classes.button} to='/home' style={{textDecoration: 'none'}}>
                <RoofingIcon className={classes.icons} fontSize='large'/>
                <span className={classes.spans}>Home</span>
        </Link>
        <Link className={classes.button} to='/about' style={{textDecoration: 'none'}}>
                <PersonOutlineIcon className={classes.icons} fontSize='large'/>
                <span className={classes.spans}>About</span>
        </Link>
        <Link className={classes.button} to='/Resume' style={{textDecoration: 'none'}}>
                <AssignmentIndTwoToneIcon className={classes.icons} fontSize='large'/>
                <span className={classes.spans}>Resume</span>
        </Link>
        <Link className={classes.button} to='/Contact' style={{textDecoration: 'none'}}>
                <MailOutlineIcon className={classes.icons} fontSize='large'/>
                <span className={classes.spans}>Contact</span>
        </Link>
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
        height:'10%',
    },
    icons:{
        color:'#d2d3d4',
    },
    spans:{
        fontFamily:'Poppins, sans-serif',
        padding:'0px 5px',
        marginTop:'5px',
        fontWeight:500,
        color:'black',
    }
  });