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
      flexDirection:'column',
      alignItems: 'stretch',
      alignContent: 'space-around',
      flexWrap:'wrap',
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
      fontFamily: 'Source Sans Pro , sans-serif',
      fontSize:20,
      display: 'flex',
    },
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
                A full stack developer course typically covers a wide range of topics, including HTML, CSS, JavaScript, databases, server-side languages, and web development frameworks.
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
            <div className={classes.subtitle}>Computer science (11 units)</div>
                <div className={classes.text}>
                  Computer science courses at the high school level introduce students to the basics of computer programming, algorithm design, and problem-solving. These courses typically cover fundamental concepts in computer science, such as data structures, control structures, and computer architecture. 
                  And so began my love and desire to develop in the field of development.
                </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>) 
        :  props.value === 'Experience' ?
        ( 
          <>
              <a href='https://www.teleclal.co.il/' target="_blank" style={{fontSize:22,justifyContent: 'center'}} className={classes.subtitle}>Teleclal Business Group</a>
              <Timeline
                sx={{
                  [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.2,
                  },
                }}
              >
                <TimelineItem>
                <TimelineOppositeContent color="textSecondary">
                    <div className={classes.date}>
                          2022 - 2022
                    </div>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <div className={classes.subtitle}>IT</div>
                    <div className={classes.text}>
                    After I was a project manager in technology , I really wanted to learn the  computers and networks confines. And today I work as an IT professional in a company, responsible for all computers and users of the company and also dealing with and learning the field of networks. 
                    </div>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent color="textSecondary">
                    <div className={classes.date}>
                      2021 - 2022
                    </div>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <div className={classes.subtitle}>PROJECT MANEGER - TECHNOLOGY</div>
                    <div className={classes.text}>
                    As a project manager, I need to work in an organized manner to ensure that all projects are carried out in a special and professional way. As a project manager, I need to act as a liaison between multiple teams and departments to ensure that all parts work together to complete the projects on time and with quality.
                    As part of my role, I am responsible for the centrality of the company, setting up centers, and building management systems by VTIGER 7.
                    </div>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent color="textSecondary">
                    <div className={classes.date}>
                          2020 - 2021
                    </div>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <div className={classes.subtitle}>Unlimited - salesman</div>
                    <div className={classes.text}>
                      I started working as a sales representative and was required to meet the company's targets. 
                      After some time working at the company, the company decided to introduce a system called Salesforce, and I was tasked with implementing the new system for our work needs.
                      As a result, I was promoted to a project management role at the company.
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

