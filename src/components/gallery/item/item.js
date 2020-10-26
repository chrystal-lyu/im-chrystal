import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Container, Title, Copy, ImageContainer } from './item.css';

const Item = ({ node }) => (
  <Container to={node.fields.slug}>
    <ImageContainer>
      <Img
        fluid={node.frontmatter.featureImage.childImageSharp.fluid}
        alt={node.frontmatter.title}
      />
    </ImageContainer>
    <figcaption>
      <Title>{node.frontmatter.title}</Title>
      <Copy>{node.excerpt}</Copy>
    </figcaption>
  </Container>
);

Item.propTypes = {
  node: PropTypes.node.isRequired,
};

export default Item;
