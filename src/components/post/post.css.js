import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
`;

export const Item = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
  margin-bottom: 4rem;

  h2 {
    transition: all 0.2s ease;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Excerpt = styled.div`
  margin: 2rem 0;
`;
