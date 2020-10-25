import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Button from 'components/button';
import Gallery from 'components/gallery';
import { graphql, Link } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
      <Link to="/about">
        <Button>More About Me</Button>
      </Link>
    </Box>
    <Box>
      <Title as="h3" size="medium">
        Recent Projects
      </Title>
    </Box>
    <Gallery items={data.allMarkdownRemark.edges} />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
    allMarkdownRemark(
      limit: 3
      filter: {
        fields: { slug: { ne: "/README/" } }
        fileAbsolutePath: { regex: "/project/" }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
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
          fields {
            slug
          }
        }
      }
    }
  }
`;
