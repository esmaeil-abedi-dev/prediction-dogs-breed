import React from 'react';
// Component
import ImageLazyLoader from '../../common/image-lazy-loader';

interface IProps {
  imagesUrl: string[];
}

const PhotoGallery: React.FC<IProps> = ({
  imagesUrl,
}: IProps): React.ReactElement => (
  <>
    {imagesUrl.length > 0
      ? imagesUrl.map((imageUrl: string) => (
          <ImageLazyLoader photoUrl={imageUrl} />
        ))
      : null}
  </>
);

export default PhotoGallery;
