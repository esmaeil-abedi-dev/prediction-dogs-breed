import styled from 'styled-components';

export const StyledContainer = styled.div`
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 24px;
  box-sizing: border-box;
`;

export const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 32px 0;
`;

export const StyledItemTitle = styled.div`
  font-size: 16px;
  color: #9aa5b1; ;
`;

export const StyledItemContent = styled.div`
  font-size: 24px;
  color: #1f2933;
`;
