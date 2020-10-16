import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './title.css';

const Title = ({ children, as = 'span', size, theme }) => {
  return (
    <Text as={as} size={size} theme={theme}>
      {children}
    </Text>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  theme: PropTypes.string,
};

export default Title;
