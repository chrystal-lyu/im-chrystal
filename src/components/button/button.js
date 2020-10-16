import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './button.css';

const Box = ({ children }) => <Button>{children}</Button>;

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
