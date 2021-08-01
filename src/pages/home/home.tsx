import React, { FunctionComponent, useCallback, useState } from 'react';
// Router
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Components
import Card from '../../components/common/card';
import EmptyState from '../../components/common/empty-state';
import InfiniteScroll from '../../components/common/infinit-scroll';
import Footer from '../../components/page/footer';
import Header from '../../components/page/header';
import Main from '../../components/page/main';
// Helper
import { changeLanguage } from '../../helper/change-language';
import { queryBuilder } from '../../helper/query-builder';
// i18n
import t from '../../i18n';
// Layout
import Layout from '../../layout';
// Redux
import {
  ADD_TO_FAVORITE_LIST,
  DELETE_FROM_FAVORITE_LIST,
  SEARCH_PHOTOS_NEXT_PAGE,
} from '../../redux/actions/action-types';
import { IApplicationState } from '../../redux/constants/state';
import { Photo } from '../../redux/constants/types';
// Services
import photoServiceProvider from '../../services/photo';

const Home: FunctionComponent = () => {
  const { photoList, favoriteList, searchQuery } = useSelector(
    (state: IApplicationState) => state.photos,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const history = useHistory();
  const dispatch = useDispatch();

  const foundFavoritePhotoIndex = useCallback(
    (id: string) =>
      favoriteList.findIndex((fav: Photo) => fav.id === id) !== -1,
    [favoriteList],
  );
  const handleClickFavorite = (photo: Photo) => {
    const isInFavoriteList = foundFavoritePhotoIndex(photo.id);
    if (!isInFavoriteList) {
      dispatch({ type: ADD_TO_FAVORITE_LIST, payload: photo });
    } else {
      dispatch({ type: DELETE_FROM_FAVORITE_LIST, payload: photo });
    }
  };

  async function getPhotosService() {
    try {
      setLoading(true);
      const nextPage = currentPage + 1;
      const { data } = await photoServiceProvider.searchPhotos(
        queryBuilder(searchQuery, nextPage),
      );
      if (data.results) {
        const res: Photo[] = data.results.map((result: any) => ({
          id: result.id,
          urls: { full: result.urls.full, thumb: result.urls.thumb },
          user: { id: result.user.id, name: result.user.first_name },
          likes: result.likes,
        }));
        dispatch({ type: SEARCH_PHOTOS_NEXT_PAGE, payload: res });
        setCurrentPage(nextPage);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <Header title={t('search')} onChangeLanguageClick={changeLanguage} />
      <Main>
        {photoList.length === 0 ? (
          <EmptyState />
        ) : (
          <InfiniteScroll
            onBottomHit={getPhotosService}
            isLoading={loading}
            hasMoreData
            loadOnMount
          >
            {photoList.map((photo: Photo) => (
              <Card
                isFavorite={foundFavoritePhotoIndex(photo.id)}
                data={photo}
                onClickFavorite={() => handleClickFavorite(photo)}
                onClickImage={() => history.push(`image/${photo.id}`)}
              />
            ))}
          </InfiniteScroll>
        )}
      </Main>
      <Footer />
    </Layout>
  );
};

export default Home;
