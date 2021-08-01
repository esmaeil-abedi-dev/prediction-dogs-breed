import React, { ReactElement, ReactNode, useRef } from 'react';
// i18n
import t from '../i18n';
// Styles
import { StyledButtonBackToTop, StyledContainer } from './layout.style';

interface IProps {
  children: ReactNode;
}
const Layout: React.FC<IProps> = ({ children }: IProps): ReactElement => {
  const topRefElement = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    if (topRefElement.current) {
      topRefElement.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <StyledContainer>
      <div ref={topRefElement} />
      {children}
      <StyledButtonBackToTop onClick={handleClick}>
        {t('top')}
      </StyledButtonBackToTop>
    </StyledContainer>
  );
};

export default Layout;
