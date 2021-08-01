import React, { FunctionComponent } from 'react';
// Assets
import EmptyStateIcon from '../../../assets/images/empty-state.png';
// Styles
import { StyledContainer, StyledImage } from './empty-state.style';

const EmptyState: FunctionComponent = () => (
  <StyledContainer>
    <StyledImage src={EmptyStateIcon} alt='' />
  </StyledContainer>
);

export default EmptyState;
