import React from 'react';
import { Link, withPrefix } from 'gatsby';
import { Container } from './nav.css';
import resumePdf from '../../../../content/resume/index.pdf';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">Projects</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a
          rel="noopener noreferrer"
          href={withPrefix(resumePdf)}
          target="_blank"
        >
          Resume
        </a>
      </li>
      <li>
        <a href="https://github.com/chrystal-lyu">GitHub</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
