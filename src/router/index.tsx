/* eslint-disable react/react-in-jsx-scope */
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// Constants
import routes, { IRoute } from './routes';

function RouterProvider() {
  return (
    <Router>
      <Switch>
        {routes.map((route: IRoute) => {
          const { component, exact, ...rest } = route;
          return (
            <Route
              exact={exact}
              key={route.path}
              component={component}
              {...rest}
            />
          );
        })}
      </Switch>
    </Router>
  );
}

export default RouterProvider;
