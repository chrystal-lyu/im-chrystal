import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 4rem;
  max-width: 700px;

  img {
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.15);
  }
  figcaption {
    text-align: center;
    font-size: 1.2rem;
    margin-top: 0.625rem;
    color: #777;
  }
`;

export const ContainerWithBorder = styled.div`
  max-width: 400px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 30px;
`;
