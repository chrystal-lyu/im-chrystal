import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { accent } from '../../constants/theme';

export const Text = styled.span`
  margin-top: 0;
  margin-bottom: 0;
  display: block;
  color: ${({ theme }) => {
    switch (theme) {
      case 'primary':
        return accent;
    }
  }};
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '400';
      case 'medium':
        return '500';
      case 'small':
        return '500';
      default:
        return '500';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '3.2rem';
      case 'medium':
        return '2.6rem';
      case 'small':
        return '2rem';
      default:
        return '2rem';
    }
  }};
  line-height: 1.2;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '2.6rem';
        default:
          return '2rem';
      }
    }};
  `};
`;
