import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import RoomIcon from '@mui/icons-material/Room';
import { makeStyles } from '@material-ui/core/styles';
import '../../CSS/fonts.css';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const Details = () => {
    const classes = useStyles();
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: isMobile ? 5 : 0,
            justifyContent: 'center',
            alignItems: 'flex-end',
            '& > :not(style)': {
            m: 1,  
            },
        }}>
            <Paper elevation={3} className={classes.paper} >
                <div className={classes.group}>
                    <CallIcon fontSize='large'/>
                    <h4>050-364-9949</h4>
                </div>
            </Paper>
            <Paper className={classes.paper} elevation={3} >
                <div className={classes.group}>
                    <AlternateEmailIcon fontSize='large'/>
                    <h4>Liranuzistud@gmail.com</h4>
                </div>
            </Paper> 
            <Paper className={classes.paper} elevation={3} >
                <div className={classes.group}>
                    <RoomIcon fontSize='large'/>
                    <h4>Center</h4>
                </div>
            </Paper>
        </Box>
  )
}

export default Details
const useStyles = makeStyles({
    paper:{
        width: '100%',
        height: '30%',
        marginRight:'30px',
        fontFamily: 'Noto Serif Oriya, serif',
        fontSize: '20px',
    },
    group:{
        display: 'flex',
        width: '100%',
        height:'100%',
        flexDirection:'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color:'#04b4e0',
        borderRadius: '24px',
        boxShadow:'0 10px 10px -8px rgb(0 0 0 / 22%)',
    }
})