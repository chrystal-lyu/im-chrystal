import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Post from 'components/post';

const Project = ({ data }) => (
  <Layout>
    <Head pageTitle="Projects" />
    <Box>
      <Post>{data.allMarkdownRemark.nodes}</Post>
    </Box>
  </Layout>
);

Project.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Project;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fields: { slug: { ne: "/README/" } }
        fileAbsolutePath: { regex: "/project/" }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featureImage {
            childImageSharp {
              resolutions {
                src
              }
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`;
