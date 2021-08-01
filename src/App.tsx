import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Components
import Boot from './boot';
// Helper
import { queryBuilder } from './helper/query-builder';
// i18n
import t from './i18n';
// Redux
import { SEARCH_PHOTOS } from './redux/actions/action-types';
import { IApplicationState } from './redux/constants/state';
import { Photo } from './redux/constants/types';
// Services
import photoServiceProvider from './services/photo';
import { SingleResultObject } from './services/types';

const App: React.FC = (): ReactElement => {
  const { searchQuery } = useSelector(
    (state: IApplicationState) => state.photos,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const getPhotosService = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await photoServiceProvider.searchPhotos(
        queryBuilder(searchQuery),
      );
      if (data.results) {
        const res: Photo[] = data.results.map((result: SingleResultObject) => ({
          id: result.id,
          urls: { full: result.urls.full, thumb: result.urls.thumb },
          user: { id: result.user.id, name: result.user.first_name },
          likes: result.likes,
        }));
        dispatch({ type: SEARCH_PHOTOS, payload: res });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  }, [dispatch, searchQuery]);

  useEffect(() => {
    getPhotosService();
  }, [getPhotosService]);

  return loading ? <h1>{t('gettingInformation')}</h1> : <Boot />;
};

export default App;
