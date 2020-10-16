import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Blog = ({ data }) => (
  <Layout>
    <Head pageTitle="Blog" />
    <Box>
      {data.allMarkdownRemark.nodes.map((node, index) => (
        <a key={index} href={node.fields.slug}>
          <h1>{node.frontmatter.title}</h1>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <hr />
        </a>
      ))}
    </Box>
  </Layout>
);

Blog.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
