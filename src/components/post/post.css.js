import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
`;

export const Item = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  .gatsby-image-wrapper {
    width: 300px;
  }
`;

export const ImageContainer = styled.div`
  display: block;
  transition: 0.4s all ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const TextContainer = styled.div`
  margin-left: 2rem;
`;

export const Excerpt = styled.div`
  margin: 2rem 0;
  line-height: 2rem;
  color: rgba(0, 0, 0, 0.5);
`;
