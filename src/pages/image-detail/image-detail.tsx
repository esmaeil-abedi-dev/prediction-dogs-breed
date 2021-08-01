import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';
// Router
import { useParams } from 'react-router-dom';
// Assets
import BackIcon from '../../assets/icons/back.svg';
// Components
import ImageInfo from '../../components/common/image-info';
import Footer from '../../components/page/footer';
// Redux
import { Photo } from '../../redux/constants/types';
// Services
import photoServiceProvider from '../../services/photo';
// Utils
import history from '../../utils/history';
// Styles
import {
  StyledBackIcon,
  StyledContainer,
  StyledImage,
} from './image-detail.style';

const ImageDetail: FunctionComponent = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo>();
  const { imageId } = useParams<{ [key: string]: string }>();

  const getPhotosService = useCallback(async () => {
    const { data } = await photoServiceProvider.getPhoto(imageId);
    if (data) {
      const singlePhoto: Photo = {
        id: data.id,
        likes: data.likes,
        urls: {
          full: data.urls.full,
          thumb: data.urls.thumb,
        },
        user: {
          id: data.user.id,
          name: data.user.first_name,
        },
        downloads: data.downloads,
        location:
          data.location.title || data.location.name || data.location.country,
      };
      setSelectedPhoto(singlePhoto);
    }
  }, [imageId]);

  useEffect(() => {
    getPhotosService();
  }, [getPhotosService]);

  if (!selectedPhoto) return null;

  return (
    <StyledContainer>
      <StyledBackIcon onClick={history.back}>
        <img src={BackIcon} alt='' />
      </StyledBackIcon>
      <StyledImage src={selectedPhoto?.urls?.full} alt='pic' />
      <ImageInfo
        downloads={selectedPhoto?.downloads}
        likes={selectedPhoto?.likes}
        location={selectedPhoto?.location}
        photographer={selectedPhoto?.user.name}
      />
      <Footer />
    </StyledContainer>
  );
};

export default ImageDetail;
