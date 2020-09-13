import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandIcon from './ExpandIcon';
import siteClasses from '../siteClasses';
import Icons from './Icons';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import ExperienceData from '../data/ExperienceData';

const Accordion = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles((theme) => ({
  root: {
    marginBottom: -1,
    minHeight: 110,
    '&$expanded': {
      minHeight: 110,
    },
  },
  content: {
    paddingBottom: theme.spacing(3),
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    display: 'flex',
    flexDirection: 'column',
    '&$expanded': {
      margin: '12px 0',
    },
  },
}))(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    border: 0,
  },
}))(MuiAccordionDetails);

function About() {
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const mainClasses = siteClasses();

  console.log();

  return (
    <div>
      {ExperienceData().map((experience, index) => {
        return (
          <Accordion
            square
            expanded={expanded === index}
            onChange={handleChange(index)}
            key={index}
          >
            <AccordionSummary expandIcon={<ExpandIcon />}>
              <Typography className={mainClasses.bodyItalic}>
                {experience.job.dates}
              </Typography>
              <Typography variant='h4'>{experience.job.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{experience.job.dates}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

export default About;
