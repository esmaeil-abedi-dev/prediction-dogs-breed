import React, { ReactElement, ReactNode } from 'react';
// Styles
import { StyledDivContainer } from './main.style';

interface IProps {
  children: ReactNode;
}

const Main: React.FC<IProps> = ({ children }: IProps): ReactElement => (
  <StyledDivContainer>{children}</StyledDivContainer>
);

export default Main;
