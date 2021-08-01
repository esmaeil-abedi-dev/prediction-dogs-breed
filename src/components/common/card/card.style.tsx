import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 160px;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  position: relative;
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
  background-color: #fff;
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
