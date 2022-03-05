import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from 'components/head';
import Box from 'components/box';
import PostHeader from 'components/post-header';

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Head pageTitle={post.frontmatter.title} siteDescription={post.excerpt} />
      <Box>
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <PostHeader title={post.frontmatter.title} />
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </article>
      </Box>
    </Layout>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
