import React, { FunctionComponent } from 'react';
// Router
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Components
import Card from '../../components/common/card';
import EmptyState from '../../components/common/empty-state';
import Footer from '../../components/page/footer';
import Header from '../../components/page/header';
import Main from '../../components/page/main';
// Helper
import { changeLanguage } from '../../helper/change-language';
// i18n
import t from '../../i18n';
// Layout
import Layout from '../../layout';
// Redux
import { DELETE_FROM_FAVORITE_LIST } from '../../redux/actions/action-types';
import { IApplicationState } from '../../redux/constants/state';
import { Photo } from '../../redux/constants/types';
// Style
import { StyledDivContainer } from './favorite.style';

const Favorites: FunctionComponent = () => {
  const { favoriteList } = useSelector(
    (state: IApplicationState) => state.photos,
  );
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickFavorite = (photo: Photo) => {
    dispatch({ type: DELETE_FROM_FAVORITE_LIST, payload: photo });
  };

  return (
    <Layout>
      <Header title={t('favorites')} onChangeLanguageClick={changeLanguage} />
      <Main>
        <StyledDivContainer>
          {favoriteList.length === 0 ? (
            <EmptyState />
          ) : (
            favoriteList.map((fav: Photo) => (
              <Card
                isFavorite
                data={fav}
                onClickFavorite={() => handleClickFavorite(fav)}
                onClickImage={() => history.push(`image/${fav.id}`)}
              />
            ))
          )}
        </StyledDivContainer>
      </Main>
      <Footer />
    </Layout>
  );
};

export default Favorites;
