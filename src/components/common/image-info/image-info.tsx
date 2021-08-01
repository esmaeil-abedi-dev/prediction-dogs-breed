import React, { FunctionComponent } from 'react';
// i18n
import t from '../../../i18n';
// Styles
import {
  StyledContainer,
  StyledItem,
  StyledItemContent,
  StyledItemTitle,
} from './image-info.style';

interface IProps {
  downloads: number | undefined;
  likes: number | undefined;
  photographer: string | undefined;
  location: string | undefined;
}

const ImageInfo: FunctionComponent<IProps> = ({
  downloads,
  likes,
  photographer,
  location,
}: IProps) => (
  <StyledContainer>
    <StyledItem>
      <StyledItemTitle>{t('downloads')}</StyledItemTitle>
      <StyledItemContent>{downloads}</StyledItemContent>
    </StyledItem>
    <StyledItem>
      <StyledItemTitle>{t('location')}</StyledItemTitle>
      <StyledItemContent>{location}</StyledItemContent>
    </StyledItem>
    <StyledItem>
      <StyledItemTitle>{t('user')}</StyledItemTitle>
      <StyledItemContent>{photographer}</StyledItemContent>
    </StyledItem>
    <StyledItem>
      <StyledItemTitle>{t('likes')}</StyledItemTitle>
      <StyledItemContent>{likes}</StyledItemContent>
    </StyledItem>
  </StyledContainer>
);

export default ImageInfo;
