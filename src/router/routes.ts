import React from 'react';
// Components
import Favorites from '../pages/favorites';
import Home from '../pages/home';
import ImageDetail from '../pages/image-detail';
// Routes
import paths from './paths';

export interface IRoute {
  path: string;
  exact: boolean;
  component: React.FunctionComponent;
}

const routes: IRoute[] = [
  { path: paths.home, component: Home, exact: true },
  { path: paths.favorite, component: Favorites, exact: true },
  { path: paths.imageDetail, component: ImageDetail, exact: false },
];

export default routes;
