import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;

      & + li {
        margin-left: 2rem;

        ${MEDIA.TABLET`
          margin-left: 1rem;
        `};
      }
    }
  }
`;
