import React from 'react';
import PropTypes from 'prop-types';
import Title from '../title';
import { Container } from './post-header.css';

const PostHeader = ({ title, date }) => (
  <Container>
    <Title as="h3" size="medium">
      {title}
    </Title>
    <p>{date}</p>
  </Container>
);

PostHeader.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
};

export default PostHeader;
