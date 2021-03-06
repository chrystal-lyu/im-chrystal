import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Button from 'components/button';
import { ContainerWithBorder } from 'components/box/box.css';

const About = ({ data }) => (
  <Layout>
    <Head pageTitle={data.aboutJson.title} />
    <Box>
      <ContainerWithBorder>
        <Img
          fluid={data.aboutJson.image.childImageSharp.fluid}
          alt="im-chrystal"
        />
      </ContainerWithBorder>
      <div
        dangerouslySetInnerHTML={{
          __html: data.aboutJson.content.childMarkdownRemark.html,
        }}
      />
      <Link to="/project">
        <Button>Browse My Work</Button>
      </Link>
    </Box>
  </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
