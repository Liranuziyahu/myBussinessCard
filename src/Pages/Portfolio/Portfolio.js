import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import IconButton from '@mui/material/IconButton';
import PicQueezer1 from '../../imgs/Queezer_1.png';
import MemoryGame1 from '../../imgs/MemoryGame_1.png';

const Portfolio = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const useStyles = makeStyles({
    root:{
      width:'100%',
      height:'100%',
     },
     groupSection:{
      display:'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap'
     },
     titles:{
      fontSize:40,
      fontFamily:'Poppins, sans-serif',
      fontWeight:500,
    }, 
    span:{
      color:'#04b4e0',
      fontWeight:600,
    },
  })
  const classes = useStyles()


  return (
    <div className={classes.root}>
      <h2 className={classes.titles}>My <span className={classes.span}> Portfolio </span></h2> 
     <div className={classes.groupSection}>
     <Card sx={{ maxWidth: 320 , marginBottom:isMobile? 5 :0 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={PicQueezer1}
          alt="Queezer project picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Queezer
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A web system for managing tests that includes creating a user, saving tests, and a diagram to show the data          
          </Typography>
          <h3>
          Technologies:
          </h3>
          <Typography variant="body2" color="text.secondary">
            ReactJS | NodeJS | MySQL | CharJS | CSS <br/>
          </Typography>
          <h3>
            Adjusted:
          </h3>
          <Typography variant="body2" color="text.secondary">
            Desktop & Mobile
          </Typography>
          <h3>
            Links
          </h3>
          <Typography>
            <IconButton style={{color:'black'}} onClick={() => window.open('https://github.com/Liranuziyahu/Quezzer')}>
              <GitHubIcon /> 
            </IconButton>
            <IconButton style={{color:'black'}} onClick={() => window.open('https://chimerical-syrniki-b91cb6.netlify.app/')}>
              <LanguageIcon/>
            </IconButton>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 320 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={MemoryGame1}
          alt="Queezer project picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Memory Game
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A web memory game with a beautiful interface, I developered with another friend at the beginning of the course         
          </Typography>
          <h3>
          Technologies:
          </h3>
          <Typography variant="body2" color="text.secondary">
            JS | CSS 
          </Typography>
          <h3>
            Adjusted:
          </h3>
          <Typography variant="body2" color="text.secondary">
            Desktop 
          </Typography>
          <h3>
            Links
          </h3>
          <Typography>
            <IconButton style={{color:'black'}} onClick={() => window.open('https://github.com/Liranuziyahu/MemoryGame-Project-JS')}>
              <GitHubIcon /> 
            </IconButton>
            <IconButton style={{color:'black'}} onClick={() => window.open('https://636bf806f9d9f60067d4ee66--taupe-churros-329d10.netlify.app/login.html')}>
              <LanguageIcon/>
            </IconButton>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     </div>
    </div>
   
  )
}

export default Portfolio
