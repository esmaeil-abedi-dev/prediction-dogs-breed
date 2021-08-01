import React, { FunctionComponent } from 'react';
// Constants
import { INavigationMenuItem } from '../../../constants/main-navoigation-menu';
// Components
import NavigationMenuItem from './item';
// Styles
import { StyledContainer } from './navigation-menu.style';

interface IProps {
  menuItems: INavigationMenuItem[];
}

const NavigationMenu: FunctionComponent<IProps> = ({ menuItems }: IProps) => (
  <StyledContainer>
    {menuItems.map((item: INavigationMenuItem) => (
      <NavigationMenuItem key={item.path} menuItem={item} />
    ))}
  </StyledContainer>
);

export default NavigationMenu;
