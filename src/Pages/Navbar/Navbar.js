import React , {useRef} from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RoofingIcon from '@mui/icons-material/Roofing';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import '../../CSS/fonts.css';


const NavBar = () => {
    const classes = useStyles();
    const LinksControl = useRef(null);
    
    const focuseLink = (index)=>{
        let linksControl = Object.values(LinksControl?.current?.children);
        linksControl?.map((link,i) => {
          if(i == index)
           {
                link.style.backgroundColor='rgba(22, 32, 10, 0.07)';
                link.children[1].style.fontWeight='600'
                link.children[0].style.color='#04b4e0'
           }
          else
            {
                link.style.backgroundColor = ''
                link.children[0].style.color=''
                link.children[1].style.fontWeight='500'
            }
        })
     }


  return (
    <div className={classes.root} ref={LinksControl}>
        <Link className={classes.button} to='/' style={{textDecoration: 'none',backgroundColor:'rgba(22, 32, 10, 0.07)' }} onClick={() => focuseLink(0)}>
                <RoofingIcon className={classes.icons} fontSize='large'style={{color:'#04b4e0'}}/>
                <span className={classes.spans} style={{fontWeight:'600'}}>Home</span>
        </Link>
        <Link className={classes.button} to='/about' style={{textDecoration: 'none'}} onClick={() => focuseLink(1)}>
                <PersonOutlineIcon className={classes.icons} fontSize='large'/>
                <span className={classes.spans}>About</span>
        </Link>
        <Link className={classes.button} to='/Resume' style={{textDecoration: 'none'}} onClick={() => focuseLink(2)}>
                <AssignmentIndTwoToneIcon className={classes.icons} fontSize='large'/>
                <span className={classes.spans}>Resume</span>
        </Link>
        <Link className={classes.button} to='/Contact' style={{textDecoration: 'none'}} onClick={() => focuseLink(3)}>
                <MailOutlineIcon className={classes.icons} fontSize='large'/>
                <span className={classes.spans}>Contact</span>
        </Link>
        <Link className={classes.button} to='/Portfolio' style={{textDecoration: 'none'}} onClick={() => focuseLink(4)}>
                <MailOutlineIcon className={classes.icons} fontSize='large'/>
                <span className={classes.spans}>Portfolio</span>
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