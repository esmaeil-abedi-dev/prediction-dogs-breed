import React, { FunctionComponent, MouseEvent } from 'react';
// Assets
import HeartSelectIcon from '../../../assets/icons/heart-select-fill.svg';
import HeartUnSelectIcon from '../../../assets/icons/heart-unselect-fill.svg';
// Redux
import { Photo } from '../../../redux/constants/types';
import ImageLazyLoader from '../image-lazy-loader/image-lazy-loader';
// Styles
import { StyledContainer, StyledFavorite } from './card.style';

type IsFavorite = boolean | (() => boolean);

interface IProps {
  isFavorite: IsFavorite;
  data: Photo;
  onClickImage: () => void;
  onClickFavorite: () => void;
}

const Card: FunctionComponent<IProps> = ({
  isFavorite,
  data,
  onClickImage,
  onClickFavorite,
}: IProps) => {
  const handleClickImage = () => {
    onClickImage();
  };
  const handleFavoriteClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    onClickFavorite();
  };
  return (
    <StyledContainer onClick={handleClickImage}>
      <ImageLazyLoader photoUrl={data.urls.thumb} />
      <StyledFavorite onClick={handleFavoriteClick}>
        <img src={isFavorite ? HeartSelectIcon : HeartUnSelectIcon} alt='' />
      </StyledFavorite>
    </StyledContainer>
  );
};

export default Card;
