import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import {
  Container,
  ImageContainer,
  TextContainer,
  Item,
  Excerpt,
} from './post.css';

const Post = ({ children }) => (
  <Container>
    {children.map(node => {
      const featureImg = node.frontmatter.featureImage
        ? node.frontmatter.featureImage.childImageSharp.fluid
        : null;
      return (
        <Item key={node.fields.slug} href={node.fields.slug}>
          <ImageContainer>
            <Img fluid={featureImg} alt={node.frontmatter.title} />
          </ImageContainer>
          <TextContainer>
            <h2>{node.frontmatter.title}</h2>
            <Excerpt>{node.excerpt}</Excerpt>
          </TextContainer>
        </Item>
      );
    })}
  </Container>
);

Post.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Post;
