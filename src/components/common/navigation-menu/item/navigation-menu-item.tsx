import React, { FunctionComponent, useMemo } from 'react';
// Router
import { NavLink, useLocation } from 'react-router-dom';
// Constants
import { INavigationMenuItem } from '../../../../constants/main-navoigation-menu';
// Styles
import { StyledContainer } from './navigation-menu-item.style';

type IProps = {
  menuItem: INavigationMenuItem;
};

const NavigationMenuItem: FunctionComponent<IProps> = ({
  menuItem,
}: IProps) => {
  const location = useLocation();
  const isSelectedPath = useMemo(
    () => location?.pathname === menuItem.path,
    [location, menuItem],
  );

  return (
    <NavLink
      to={menuItem.path}
      exact={menuItem.exact}
      style={{ textDecoration: 'none' }}
      activeStyle={{ color: 'blue' }}
    >
      <StyledContainer>
        <img
          src={isSelectedPath ? menuItem.selectedIcon : menuItem.unSelectedIcon}
          alt={menuItem.label}
        />
        {menuItem.label}
      </StyledContainer>
    </NavLink>
  );
};
export default NavigationMenuItem;
