import React from 'react';
import { Container, Item } from './icon.css';

import LinkedIn from '../../images/social/linkedin.png';
import Github from '../../images/social/github.png';
import Twitter from '../../images/social/twitter.png';
import Gmail from '../../images/social/gmail.png';

const SocialList = [
  {
    icon: LinkedIn,
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/chrystal-lyu/',
  },
  {
    icon: Github,
    title: 'Github',
    link: 'https://github.com/chrystal-lyu',
  },
  {
    icon: Twitter,
    title: 'Twitter',
    link: 'https://twitter.com/chrystal_lyu',
  },
  {
    icon: Gmail,
    title: 'Gmail',
    link: 'mailto:chrystal.lyu@gmail.com',
  },
];

const Icon = () => (
  <Container>
    {SocialList.map((item, index) => (
      <Item href={item.link} key={index}>
        <img src={item.icon} width={20} height={20} alt={item.title} />
      </Item>
    ))}
  </Container>
);

export default Icon;
