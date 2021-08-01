import React from 'react';
// Component
import ImageLazyLoader from '../../common/image-lazy-loader';
import InfiniteScroll from '../../common/infinit-scroll/infinit-scroll';

interface IProps {
  imagesUrl: string[];
  loading: boolean;
  hasMoreData: boolean;
  onNextPage: () => void;
}

const PhotoGallery: React.FC<IProps> = ({
  imagesUrl,
  loading,
  hasMoreData,
  onNextPage,
}: IProps): React.ReactElement => (
  <InfiniteScroll
    onBottomHit={onNextPage}
    isLoading={loading}
    hasMoreData={hasMoreData}
    loadOnMount
  >
    {imagesUrl.length > 0
      ? imagesUrl.map((imageUrl: string) => (
          <ImageLazyLoader photoUrl={imageUrl} key={imageUrl} />
        ))
      : null}
  </InfiniteScroll>
);

export default PhotoGallery;
