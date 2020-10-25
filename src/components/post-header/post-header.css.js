import styled from 'styled-components';
import { accent } from '../../constants/theme';

export const Container = styled.header`
  h3 {
    display: inline-block;
    color: ${accent};
    font-weight: 600;
  }

  p {
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
  }
`;
