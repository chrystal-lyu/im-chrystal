import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy } from './item.css';

const Item = ({ node }) => (
  <figure>
    <Img
      fluid={node.frontmatter.featureImage.childImageSharp.fluid}
      alt={node.frontmatter.title}
    />
    <figcaption>
      <Title>{node.frontmatter.title}</Title>
      <Copy>{node.excerpt}</Copy>
    </figcaption>
  </figure>
);

Item.propTypes = {
  // title: PropTypes.string,
  // copy: PropTypes.string,
  // image: PropTypes.object.isRequired,
};

export default Item;
