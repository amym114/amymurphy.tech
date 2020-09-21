import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import DividerGrid from './DividerGrid';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandIcon from './ExpandIcon';
import siteClasses from '../siteClasses';
import Icons from './Icons';
import Tools from './Tools';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import ExperienceData from '../data/ExperienceData';

const useStyles = makeStyles((theme) => ({
  iconHolder: {
    maxWidth: '450px',
  },
  toolHolder: {
    maxWidth: '400px',
  },
  padAboutRight: {
    paddingRight: theme.spacing(1),
  },
  resumeBtn: {
    clear: 'both',
    display: 'block',
    float: 'none',
    marginLeft: 0,
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    iconHolder: {
      maxWidth: '350px',
    },
    toolHolder: {
      maxWidth: '300px',
    },
    padAboutRight: {
      paddingRight: theme.spacing(7),
    },
    resumeBtn: {
      float: 'right',
      marginLeft: '1rem',
      marginBottom: '1rem',
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
    paddingBottom: theme.spacing(5),
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
  },
}))(MuiAccordionDetails);

function Resume() {
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
    return false;
  };

  const getRightCols = (experience) => {
    if (
      experience.responsibilities ||
      experience.impacts ||
      experience.techStack
    ) {
      return 6;
    }
    return false;
  };

  return (
    <>
      <Box>
        <Typography variant='h2'>OVERVIEW </Typography>

        <Box mt={2} mb={3}>
          <Typography variant='body2' paragraph>
            <Button
              href='http://www.amymurphy.tech/pdfs/Amy%20Murphy%20-%20Full%20Stack%20Web%20Developer.pdf?fbclid=IwAR27eXQDzkOhfYb0DvkKqZZO_rcM-X6bSoN1Npb2tYOH8fiZuuocl1VbzCE'
              variant='outlined'
              size='small'
              className={classes.resumeBtn}
            >
              Download PDF
            </Button>
            I am an accomplished professional with a genuine passion for and
            dedication to this industry. As an avid learner, I am continuously
            developing my skillset: I have a robust background in PHP, MySQL,
            JavaScript, and HTML/CSS with additional extensive experience in
            ReactJS, Node.js, Express, MongoDB, and more.{' '}
          </Typography>

          <Typography variant='body2'>
            In the workplace, I am a collaborative leader with strong project
            management and communication skills. Whether an issue calls for
            creative problem solving, critical thinking, or adaptability, you
            can rely on my expertise to get the job done.{' '}
          </Typography>
        </Box>
      </Box>
      <Typography variant='h2'>EXPERIENCE</Typography>
      {ExperienceData().map((experience, index) => {
        return (
          <div key={index}>
            <Accordion
              square
              expanded={expanded === index}
              onChange={handleChange(index)}
              key={'e' + index}
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
                    <Typography variant='body2' gutterBottom paragraph>
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
                              ? experience.features.map((feature, index) => {
                                  return <li key={'f' + index}>{feature}</li>;
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
                              (responsibility, index) => {
                                return (
                                  <li key={'r' + index}>{responsibility}</li>
                                );
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
                            {experience.impacts.map((impact, index) => {
                              return <li key={'i' + index}>{impact}</li>;
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
          </div>
        );
      })}
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
      >
        <Grid item>
          <Box mt={2} mb={2}>
            <Typography variant='h2' gutterBottom>
              TECHNICAL SKILLS
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
      >
        <Grid item md>
          <Grid container>
            <Grid item className={classes.iconHolder}>
              <Icons />
            </Grid>
            <Grid item md>
              <Box ml={2} mr={6}>
                <Typography variant='body1'>
                  These days, I spend most of my time in Javascript – I’m
                  running Node 12 on my server and working in React 16 on my
                  front-end. But hey, you like Wordpress? I can do Wordpress.
                  You like PHP? I can do PHP. Whatever makes you happy, future
                  client.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <DividerGrid />

      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
      >
        <Grid item>
          <Typography variant='h2' gutterBottom>
            FAVORITE TOOLS
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
          <Grid container>
            <Grid item md>
              <Typography variant='body1' paragraph>
                What's a developer without her toolbox? This is just a handful
                of my most favorite apps, but is a good representation of what I
                have open at any given time.
              </Typography>{' '}
              <Typography variant='body1' paragraph>
                Honorable mention also goes to BBEdit, which used to be my
                default editor but is now a super helpful scratchpad, and also
                to Terminal, which basically runs my whole life.
              </Typography>
            </Grid>
            <Grid item className={classes.toolHolder}>
              <Box ml={2}>
                <Tools />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <DividerGrid />
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
      >
        <Grid item>
          <Typography variant='h2' gutterBottom>
            EDUCATION
          </Typography>
          <Typography variant='h4'>FULL SAIL UNIVERSITY</Typography>
          <Typography variant='body1'>
            Associate Degree in Digital Media & Communication
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Resume;
