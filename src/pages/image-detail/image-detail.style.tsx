import styled from 'styled-components';

export const StyledContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 400px;
`;

export const StyledBackIcon = styled.div`
  width: 36px;
  height: 36px;
  overflow: hidden;
  border-radius: 50%;
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(16px);
`;
