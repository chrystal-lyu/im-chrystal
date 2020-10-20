import React from 'react';
import Icon from 'components/icon';
import { Container } from './footer.css';

const Footer = () => (
  <Container>
    <Icon />
    <div>
      © {new Date().getFullYear()}, Built with{' '}
      <a href="https://www.gatsbyjs.org/">Gatsby</a> Hosted with{' '}
      <a href="https://www.netlify.com/">Netlify</a>
    </div>
  </Container>
);

export default Footer;
