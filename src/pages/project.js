import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Project = ({ data }) => (
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
        }
      }
    }
  }
`;
