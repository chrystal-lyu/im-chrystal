import React from 'react';
import PropTypes from 'prop-types';
import { Container, Item, Excerpt } from './post.css';

const Post = ({ children }) => (
  <Container>
    {children.map(node => {
      return (
        <Item key={node.fields.slug} href={node.fields.slug}>
          <h2>{node.frontmatter.title}</h2>
          <Excerpt>{node.excerpt}</Excerpt>
        </Item>
      );
    })}
  </Container>
);

Post.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Post;
