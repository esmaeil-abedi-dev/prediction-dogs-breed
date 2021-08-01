// Assets
import HeartSelectIcon from '../assets/icons/heart-select.svg';
import HeartUnSelectIcon from '../assets/icons/heart-unselect.svg';
import SearchUnSelectIcon from '../assets/icons/search-nav.svg';
import SearchSelectIcon from '../assets/icons/search-select.svg';
// Routes
import paths from '../router/paths';

export interface INavigationMenuItem {
  label: string;
  path: string;
  selectedIcon: string;
  unSelectedIcon: string;
  iconViewBox?: string;
  exact: boolean;
}

export const navigationMenuItems: INavigationMenuItem[] = [
  {
    label: 'search',
    path: paths.home,
    selectedIcon: SearchSelectIcon,
    unSelectedIcon: SearchUnSelectIcon,
    iconViewBox: '0 0 16 16',
    exact: true,
  },
  {
    label: 'favorites',
    path: paths.favorite,
    selectedIcon: HeartSelectIcon,
    unSelectedIcon: HeartUnSelectIcon,
    exact: false,
  },
];
