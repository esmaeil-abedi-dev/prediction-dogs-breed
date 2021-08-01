import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  height: 40px;
  position: absolute;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  overflow: hidden;
  position: relative;
  border-radius: 40px;
  border: none;
  outline: none;
  background-color: #dbe0e6;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  color: #323f4b;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledFavorite = styled.div`
  width: 36px;
  height: 36px;
  overflow: hidden;
  border-radius: 50%;
  position: absolute;
  top: 32px;
  right: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
