import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
  iconHolder: {
    maxWidth: '450px',
  },
  padAboutRight: {
    paddingRight: theme.spacing(1),
  },
  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    iconHolder: {
      maxWidth: '350px',
    },
    padAboutRight: {
      paddingRight: theme.spacing(7),
    },
  },
}));

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
    padding: 0,
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
    paddingLeft: 0,
    paddingBottom: theme.spacing(2),
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
  },
}))(MuiAccordionDetails);

function About() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const mainClasses = siteClasses();

  const getLeftCols = (experience) => {
    if (experience.features) {
      if (
        experience.responsibilities ||
        experience.impacts ||
        experience.techStack
      ) {
        return 6;
      }
      return 12;
    }
    return 0;
  };

  const getRightCols = (experience) => {
    if (
      experience.responsibilities ||
      experience.impacts ||
      experience.techStack
    ) {
      return 6;
    }
    return 0;
  };

  return (
    <>
      <Typography variant='h2'>EXPERIENCE</Typography>
      {ExperienceData().map((experience, index) => {
        return (
          <>
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
              <AccordionDetails
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <Box mb={2}>
                  <Grid
                    container
                    direction='row'
                    justify='flex-start'
                    alignItems='flex-start'
                  >
                    <Grid item>
                      Company: <b>{experience.job.company} </b>
                      {'   '}|{'   '}
                      Location: <b>{experience.job.location}</b>
                    </Grid>
                  </Grid>
                </Box>
                <Grid
                  container
                  direction='row'
                  justify='flex-start'
                  alignItems='flex-start'
                >
                  <Grid item xs={12} md={12}>
                    <Typography variant='body2' paragraph>
                      {experience.job.brief}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction='row'
                  justify='flex-start'
                  alignItems='flex-start'
                >
                  <Grid item xs={12} md={getLeftCols(experience)}>
                    {experience.features ? (
                      <Grid container>
                        <Grid item>
                          <Typography variant='h4'>
                            {experience.featuresTitle}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <ul style={{ marginTop: 0, marginRight: '50px' }}>
                            {experience.features
                              ? experience.features.map((feature) => {
                                  return <li>{feature}</li>;
                                })
                              : ''}
                          </ul>
                        </Grid>
                      </Grid>
                    ) : (
                      ''
                    )}
                  </Grid>
                  <Grid item xs={12} md={getRightCols(experience)}>
                    {experience.responsibilities ? (
                      <Grid container>
                        <Grid item>
                          <Typography variant='h4'>
                            PRINCIPAL RESPONSIBILITIES
                          </Typography>
                        </Grid>
                        <Grid item>
                          <ul style={{ marginTop: 0, marginRight: '50px' }}>
                            {experience.responsibilities.map(
                              (responsibility) => {
                                return <li>{responsibility}</li>;
                              }
                            )}
                          </ul>
                        </Grid>
                      </Grid>
                    ) : (
                      ''
                    )}

                    {experience.impacts ? (
                      <Grid container>
                        <Grid item>
                          <Typography variant='h4'>KEY IMPACTS</Typography>
                        </Grid>
                        <Grid item>
                          <ul style={{ marginTop: 0, marginRight: '50px' }}>
                            {experience.impacts.map((impact) => {
                              return <li>{impact}</li>;
                            })}
                          </ul>
                        </Grid>
                      </Grid>
                    ) : (
                      ''
                    )}

                    {experience.techStack ? (
                      <>
                        <Grid
                          container
                          direction='row'
                          justify='flex-start'
                          alignItems='flex-start'
                        >
                          <Grid item>
                            <Typography variant='h4'>TECH STACK</Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          direction='row'
                          justify='flex-start'
                          alignItems='flex-start'
                        >
                          <Grid item>
                            <Typography variant='body2' display='inline'>
                              <b>Frontend:</b>{' '}
                            </Typography>

                            {experience.techStack.frontend.map(
                              (stack, index) => {
                                if (index === 0) {
                                  return `${stack}`;
                                }
                                return `, ${stack}`;
                              }
                            )}
                            <br />
                            <Typography variant='body2' display='inline'>
                              <b>Backend:</b>{' '}
                            </Typography>

                            {experience.techStack.backend.map(
                              (stack, index) => {
                                if (index === 0) {
                                  return `${stack}`;
                                }
                                return `, ${stack}`;
                              }
                            )}
                          </Grid>
                        </Grid>
                      </>
                    ) : (
                      ''
                    )}
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </>
        );
      })}
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
      >
        <Grid item>
          <Typography variant='h2' gutterBottom>
            TECHNICAL SKILLS
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
      >
        <Grid item md>
          <Typography variant='body2'>
            {' '}
            These days, I spend most of my time in Javascript – I’m running Node
            12 on my server and working in React 16 on my front-end. But hey,
            you like Wordpress? I can do Wordpress. You like PHP? I can do PHP.
            Whatever makes you happy, future client.
          </Typography>{' '}
          <Icons />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <Divider />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <Typography variant='h2'></Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default About;
