import React from 'react';

const ExperienceData = () => {
  return [
    {
      job: {
        company: 'Dogwood Productions',
        title: 'FULL STACK WEB DEVELOPER',
        dates: 'March 2006 – Present',
        location: 'Mobile, AL/New Orleans, LA',
        brief:
          'My primary job at Dogwood Productions is as a Full Stack Developer for Grasshopper Mowers, a commercial lawnmowing company. I have been responsible for the end-to-end development and design of their internal dealer/employee app for the past eight years. Over the course of the past year, I have worked to migrate this project from a more imperatively programmed Javascript, jQuery, AJAX, PHP, and MySQL app, to a functionally programmed MERN stack app.',
      },
      featuresTitle: 'APP FEATURES',
      features: [
        <>
          Intuitive <b>quote system</b> creates quick, accurate quotes which
          dealers can provide to customers
        </>,
        <>
          Dozens of <b>pricing paths</b> allow dealers to quote or bid based on
          the most pertinent prices and costing
        </>,
        <>
          System prompts dealers to <b>add required parts</b> and{' '}
          <b>removes incompatible parts</b> to ensure there are no issues or
          "surprise costs" for the customer when the unit comes in
        </>,
        <>
          Multiple inclusive dealer <b>cost calculators</b> help users get their
          invoice totals, find out profits and margins, take full advantage of
          programs, and include trade-ins, set-up costs, tax, etc.
        </>,
        <>
          User levels determined on log-in give access to different types of{' '}
          <b>curated content</b>, such as latest programs, files, and
          announcements
        </>,
        <>
          System allows dealers to use quotes as a <b>starting point</b> for
          generating orders, creating hangtags, registering warranties, and
          filing claims, convieniently following the customer’s journey from the
          time they first spot their machine through registration
        </>,
        <>
          Custom <b>content management system</b> for easy management of parts,
          prices, rules, cost calculator, etc., including dynamic charts and
          graphs outlining sales and usage trends
        </>,
      ],
      responsibilities: [
        <>
          Planned and <b>managed project</b> using Github
        </>,
        <>
          <b>Communicated constantly and clearly</b> with project owner to
          ensure the project moved steadily and everyone involved stayed on the
          same page
        </>,
        <>
          Designed <b>intuitive user interfaces</b> which handle large amounts
          of data gracefully while maintaining simplicity
        </>,
        <>
          Produced <b>normalized MySQL database design</b> (3NF), with
          appropriate indexes and relationships{' '}
        </>,
        <>
          Built front-end with modern <b>ReactJS</b> framework, utilizing hooks
          and context for quick data manipulation
        </>,
        <>
          Constructed <b>RESTful API</b> allowing for easy access to custom data
        </>,
      ],
      impacts: [
        <>
          Increased the number of quotes from ~3,000 in the first year to
          ~15,000 last year
        </>,
        <>
          Greatly elevated accuracy of quotes, enhancing customer satisfaction
        </>,
        <>
          Transformed how quotes, orders, and warranties are created and handled
          interally, taking it from a paper system to completely digital
        </>,
      ],
      techStack: {
        frontend: ['Javascript', 'ReactJS', 'JSX', 'JSS'],
        backend: ['NodeJS', 'Express', 'MySQL'],
      },
    },
    {
      job: {
        company: 'Amy Murphy Tech',
        title: 'FREELANCE WEB DEVELOPER',
        dates: 'October 2005 – Present',
        location: 'Mobile, AL/New Orleans, LA',
        brief: (
          <>
            As a passionate developer, I am always looking for the next project
            to help hone my skillset and experiment with new technology. My most
            engaging projects to date have been creating and maintaining the
            full web presence of Fairhope Brewing Company from 2011&ndash;2015,
            and maintaining and enhancing the website of Urban South Brewing
            Company from 2017&ndash;2019.
          </>
        ),
      },
      featuresTitle: 'Project Highlight: Fairhope Brewing Company ',
      features: [
        <>
          Created and mainted a fully dynamic, mobile-first website which
          incorporated the branding of the beer and taproom
        </>,
        <>
          Tied into Untappd and Instagram APIs to pull in relevant tap lists and
          recent photos{' '}
        </>,
        <>
          Continuously ran reports via Google Analytics to improve site’s search
          performance{' '}
        </>,
        <>Built custom-CMS to easily update site content</>,
        <>Managed overall online reputation of the brewery</>,
      ],
    },
    {
      job: {
        company: 'Integrity Records',
        title: 'MOTION GRAPHICS DESIGNER',
        dates: 'April 2005 – March 2006',
        location: 'Mobile, AL',
        brief: (
          <>
            Generated engaging artist relations, public relations, and
            advertising videos utilizing Adobe After Effects and Final Cut Pro.
          </>
        ),
      },
    },
    {
      job: {
        company: 'ERA International',
        title: 'FRONT-END DESIGNER AND DEVELOPER',
        dates: 'October 2004 – March 2005',
        location: 'Orlando, FL',
        brief: (
          <>
            Performed Flash based development of international real estate
            websites with multi-language support for luxury homes in Europe and
            the US Virgin Islands. Specialized in merging motion graphics with
            web technology.
          </>
        ),
      },
    },
  ];
};

export default ExperienceData;
