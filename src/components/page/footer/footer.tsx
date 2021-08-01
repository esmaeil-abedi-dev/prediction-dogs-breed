import React, { ReactElement } from 'react';
import { navigationMenuItems } from '../../../constants/main-navoigation-menu';
import NavigationMenu from '../../common/navigation-menu';

const Footer: React.FC = (): ReactElement => (
  <NavigationMenu menuItems={navigationMenuItems} />
);

export default Footer;
