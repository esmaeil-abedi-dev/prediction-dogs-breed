import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const StyledButtonBackToTop = styled.button`
  all: unset;
  position: fixed;
  right: 20px;
  bottom: 80px;
  border: 1px solid;
  border-radius: 50px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
`;
