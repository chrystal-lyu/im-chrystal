import React from 'react';
import Icon from 'components/icon';
import { Container } from './footer.css';

const Footer = () => (
  <Container>
    <Icon />
    <div>
      © 2020, Built with <a href="https://www.gatsbyjs.org/">Gatsby</a>
    </div>
  </Container>
);

export default Footer;
