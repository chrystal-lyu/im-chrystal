import styled from 'styled-components';
import { accent } from '../../constants/theme';
import MEDIA from 'helpers/mediaTemplates';

const screenWidth = typeof window !== 'undefined' && window.screen.width;

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

  ${MEDIA.TABLET`
    margin: 0;
  `};
`;

export const Item = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: inherit;
  margin-bottom: 4rem;

  ${MEDIA.TABLET`
    flex-direction: column;
  `};

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
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .gatsby-image-wrapper {
    width: 300px;

    ${MEDIA.TABLET`
      width: calc(${screenWidth}px - 4rem);
    `};
  }
`;

export const Excerpt = styled.div`
  margin: 2rem 0;
  line-height: 2rem;
  color: rgba(0, 0, 0, 0.5);

  ${MEDIA.TABLET`
    margin: 1rem 0;
  `};
`;
