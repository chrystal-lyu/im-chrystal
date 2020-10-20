import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Box from 'components/box';
import Title from 'components/title';

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Box>
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <Title as="h3" size="medium">
              {post.frontmatter.title}
            </Title>
            <p>{post.frontmatter.date}</p>
          </header>
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
