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

const MyTimeline = ({props}) => {
  const classes = useStyles()
  return (
    <div>
      {
        props.value === 'Education' ? 
     
(        <Timeline
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
          <div>Full Stack Developer</div>
              <div className={classes.text}>
                  Establishment of centers in the field of telephony with FreePBX - Asterisk system
                  Building custom CRM for clients with Vtiger 7 system, and making tutorials
              </div>
          </TimelineContent>
        </TimelineItem>

     
      </Timeline>) 
      :  props.value === 'Experience' ?
      (        <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
            <div className={classes.date}>
                  2021-2022
            </div>
            <div>
                Teleclal
            </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div>IT</div>
            <div className={classes.text}>
                Establishment of centers in the field of telephony with FreePBX - Asterisk system
                Building custom CRM for clients with Vtiger 7 system, and making tutorials
            </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
            <div className={classes.date}>
                  2021-2022
            </div>
            <div>
                Teleclal
            </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <div>PROJECT MANEGER - TECHNOLOGY</div>
            <div className={classes.text}>
                Establishment of centers in the field of telephony with FreePBX - Asterisk system
                Building custom CRM for clients with Vtiger 7 system, and making tutorials
                Managing projects with short-term deadlines and high pressure.
            </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
            <div className={classes.date}>
                  2020-2021
            </div>
            <div>
                Teleclal
            </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div>UNLIMITED - SALESMAN</div>
            <div className={classes.text}>
                Providing service to the company's customers and meeting customer satisfaction goals
                Handling and dealing with competing proposals
            </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>) :null
       }
    </div>
  )
}

export default MyTimeline

const useStyles = makeStyles({
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
    width:'80px',
    float:'right'
  }
})