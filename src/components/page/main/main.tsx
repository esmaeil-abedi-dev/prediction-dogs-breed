import React, { ReactElement, useEffect, useState } from 'react';
// Constants
import { config } from '../../../constants/photo-gallery';
// Hardcode text
import findText from '../../../replace-hardcode-text';
// Component
import PhotoGallery from '../photo-gallery';

interface IProps {
  loading: boolean;
  imagesUrl: string[];
}

const Main: React.FC<IProps> = ({
  loading,
  imagesUrl,
}: IProps): ReactElement => {
  const [images, setImages] = useState<string[]>(
    imagesUrl.slice(0, config.PageSize),
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const handleNextPage = () => {
    const nextPageNumber = currentPage + 1;
    setImages(imagesUrl.slice(0, nextPageNumber * config.PageSize));
    setCurrentPage(nextPageNumber);
  };

  useEffect(() => {
    if (imagesUrl.length === 0) {
      setImages([]);
    }
  }, [imagesUrl]);

  return loading ? (
    <h1>{findText('loading')}</h1>
  ) : (
    <PhotoGallery
      imagesUrl={images}
      onNextPage={handleNextPage}
      loading={loading}
      hasMoreData={images.length < imagesUrl.length}
    />
  );
};

export default Main;
