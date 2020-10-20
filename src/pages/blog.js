import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Post from 'components/post';

const Blog = ({ data }) => (
  <Layout>
    <Head pageTitle="Blog" />
    <Box>
      <Post>{data.allMarkdownRemark.nodes}</Post>
    </Box>
  </Layout>
);

Blog.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fields: { slug: { ne: "/README/" } }
        fileAbsolutePath: { regex: "/blog/" }
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
        }
      }
    }
  }
`;
