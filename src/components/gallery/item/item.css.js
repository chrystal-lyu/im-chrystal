import styled from 'styled-components';
import { Link } from 'gatsby';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled(Link)`
  display: block;
  position: relative;
  text-decoration: none;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-bottom: 3rem;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 4px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.85);
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  &:hover:before {
    visibility: visible;
    width: 100%;
  }

  &:hover {
    -webkit-box-shadow: 10px 20px 30px 10px rgba(240, 240, 240, 1);
    -moz-box-shadow: 10px 20px 30px 10px rgba(240, 240, 240, 1);
    box-shadow: 10px 20px 30px 10px rgba(240, 240, 240, 1);
  }
`;

export const ImageContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;

export const Title = styled.span`
  display: block;
  color: rgba(0, 0, 0, 0.85);
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  margin: 1.5rem 1rem 1rem 1rem;
`;

export const Copy = styled.p`
  margin: 0 1rem 1.5rem 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.55);
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.02em;

  ${MEDIA.TABLET`
    margin-bottom: 2rem;
  `};
`;
