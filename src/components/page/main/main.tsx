import React, { ReactElement, useState } from 'react';
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
  const [images, setImages] = useState<string[]>(imagesUrl.slice(0, 20));
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleNextPage = () => {
    const nextPageNumber = currentPage + 1;
    setImages(imagesUrl.slice(0, nextPageNumber * 20));
    setCurrentPage(nextPageNumber);
  };

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
