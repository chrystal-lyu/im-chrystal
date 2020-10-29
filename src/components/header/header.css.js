import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;

  ${MEDIA.TABLET`
    padding: 2rem 2rem;
  `};

  h1 {
    ${MEDIA.TABLET`
      font-size: 1.5rem;
      
    `}
  }
  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;
