import styled from 'styled-components';
import { accent } from '../../constants/theme';

export const Container = styled.div`
  max-width: 700px;
`;

export const ImageContainer = styled.div`
  display: block;
  transition: 0.3s all ease-in-out;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 8px;

  img {
    border: none;
  }
`;

export const TextContainer = styled.div`
  margin-left: 2rem;
`;

export const Item = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: inherit;
  margin-bottom: 4rem;

  &:hover {
    ${ImageContainer} {
      transform: scale(1.02);
    }
    h2 {
      color: ${accent};
    }
  }

  h2 {
    transition: all 0.3s ease;
    text-decoration: none;
  }

  .gatsby-image-wrapper {
    width: 300px;
  }
`;

export const Excerpt = styled.div`
  margin: 2rem 0;
  line-height: 2rem;
  color: rgba(0, 0, 0, 0.5);
`;
