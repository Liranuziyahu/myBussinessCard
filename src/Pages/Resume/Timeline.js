import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';

const MyTimeline = ({props}) => {
  const theme = useTheme() 
  const useStyles = makeStyles({
    root:{
      width:'100%',
      [theme.breakpoints.down('sm')]:{
        width:'100vw',
      }
    },
    text:{
      display:'flex',
      width:'100%',
      flexDirection:'row',
      flexWrap:'wrap',
      fontSize:'14px',
      fontFamily:'Poppins, sans-serif',
      lineHeight: '1.65em',
      fontWeight:300,
      color:'#555',
    },
    date:{
      whiteSpace:'nowrap',
    },
    subtitle:{
      fontFamily: 'Noto Serif Oriya , serif',
      fontSize:18,
      display: 'flex',
    },
    pointerEvents:{
      color: 'black',
      width:'7px !important' ,
      justifyContent:'center !important',
      fontSize:'10px !important',
      margin:'0px 7px 0px 7px !important',

     }
  })
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {
        props.value === 'Education' ? 
          (<Timeline
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
              },
            }}
          >
            <TimelineItem>
            <TimelineOppositeContent color="textSecondary" >
                <div className={classes.date}>
                    2021-2022
                </div>
                <div>
                    INT
                </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <div className={classes.subtitle}>Full Stack Developer</div>
                <div className={classes.text}>
                Full stack developers course are web developers who are proficient in both the front-end (client-side) and back-end (server-side) aspects of web development. 
                A full stack developer course typically covers a wide range of topics, including HTML, CSS, JavaScript, databases, nodeJS, and web development frameworks.
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="textSecondary" >
                <div className={classes.date}>
                    2013-2016
                </div>
                <div>
                Ironi Tet High School 
                </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <div className={classes.subtitle}>Computer science</div>
                <div className={classes.text}>
                Computer science courses at the high school level introduce students to the basics of computer programming, algorithm design, and problem-solving. These courses typically cover fundamental concepts in computer science, such as data structures, control structures, and code. 
                </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>) 
        :  props.value === 'Experience' ?
        ( 
          <>
              <Timeline sx={{[`& .${timelineOppositeContentClasses.root}`]: {flex: 0.2,},}}>
                <a href='https://www.noviopus.com/' target="_blank" style={{fontSize:22,justifyContent: 'center',width:'100%'}} className={classes.subtitle}>Noviopus</a>
                <TimelineItem>
                  <TimelineOppositeContent color="textSecondary">
                      <div className={classes.date} style={{color:'#1c1c1c' ,fontWeight:'600'}}>
                            present
                      </div>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                  <div className={classes.subtitle}>Fronted Developer</div>
                      <div className={classes.text}>
                      <div > <CircleIcon className={classes.pointerEvents}/>Receiving tasks and projects for front-end development</div>
                      <div > <CircleIcon className={classes.pointerEvents}/>Implementing and completing front-end development projects.</div>
                      </div>
                  </TimelineContent>
                </TimelineItem>
                <br></br>
                <a href='https://www.teleclal.co.il/' target="_blank" style={{fontSize:22,justifyContent: 'center',width:'100%'}} className={classes.subtitle}>Teleclal Business Group</a>   
                <TimelineItem>
                  <TimelineOppositeContent color="textSecondary">
                      <div className={classes.date} style={{color:'#1c1c1c' ,fontWeight:'600'}}>
                            present
                      </div>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                  <div className={classes.subtitle}>IT</div>
                      <div className={classes.text}>
                      <div > <CircleIcon className={classes.pointerEvents}/> Managing and maintaining the company's technology equipment, servers, and networks</div>
                      <div > <CircleIcon className={classes.pointerEvents}/> Providing technical support and assistance to company employees in the areas of computers and telephony</div>
                      <div > <CircleIcon className={classes.pointerEvents}/> Setting up and configuring call centers for the company</div>
                      </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="textSecondary">
                      <div className={classes.date}>
                        2021-2022
                      </div>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                      <div className={classes.subtitle}>PROJECT MANEGER - TECHNOLOGY</div>
                      <div className={classes.text}>
                        <div > <CircleIcon className={classes.pointerEvents}/> Building custom CRM for clients with Vtiger 7 system, and making tutorials</div>
                        <div > <CircleIcon className={classes.pointerEvents}/> Establishment of call center in the field of telephony with FreePBX - Asterisk system</div>
                        <div > <CircleIcon className={classes.pointerEvents}/> Managing projects with short-term deadlines and high pressure.</div>
                        <div > <CircleIcon className={classes.pointerEvents}/> Dynamic work with the company's executives, keeping close connections with customers.</div>
                        <div > <CircleIcon className={classes.pointerEvents}/> Organizational experience, working with multiple teams and divisions</div>
                      </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="textSecondary">
                      <div className={classes.date}>
                            2020-2021
                      </div>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                  <div className={classes.subtitle}>Unlimited - salesman</div>
                      <div className={classes.text}>
                        <div > <CircleIcon className={classes.pointerEvents}/> Providing service to the company's customers and meeting customer satisfaction goals</div>
                        <div > <CircleIcon className={classes.pointerEvents}/> Handling and dealing with competing proposals</div>
                        <div > <CircleIcon className={classes.pointerEvents}/> Characterization of the Salesforce system according to the needs of the company</div>
                      </div>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
      </>) :null
    }
  </div>
  )
}

export default MyTimeline





