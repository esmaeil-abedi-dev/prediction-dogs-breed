import React, { ReactElement } from 'react';
// Assets
import LanguageIcon from '../../../assets/icons/language.png';
// Components
import SearchInput from '../../common/search-input';
// Styles
import {
  StyledDivContainer,
  StyledHeader,
  StyledImage,
  StyledImageContainer,
} from './header.style';

interface IProps {
  title: string;
  onChangeLanguageClick: () => void;
}

const Header: React.FC<IProps> = ({
  title,
  onChangeLanguageClick,
}: IProps): ReactElement => (
  <StyledHeader>
    <StyledDivContainer>
      <StyledImageContainer>
        <StyledImage
          src={LanguageIcon}
          alt='change language'
          onClick={onChangeLanguageClick}
        />
      </StyledImageContainer>
      <SearchInput />
    </StyledDivContainer>
    <h1>{title}</h1>
  </StyledHeader>
);

export default Header;
