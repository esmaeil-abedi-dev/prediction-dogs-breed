import React, { ReactNode, useEffect, useRef, useState } from 'react';
// Style
import { StyledContainer } from './infinit-scroll.style';

interface IProps {
  onBottomHit: () => void;
  isLoading: boolean;
  hasMoreData: boolean;
  loadOnMount: boolean;
  children: ReactNode;
}

function isBottom(ref: React.RefObject<HTMLDivElement>) {
  if (!ref.current) {
    return false;
  }
  return ref.current.getBoundingClientRect().bottom <= window.innerHeight;
}

const InfiniteScroll: React.FC<IProps> = ({
  onBottomHit,
  isLoading,
  hasMoreData,
  loadOnMount,
  children,
}: IProps) => {
  const [initialLoad, setInitialLoad] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loadOnMount && initialLoad) {
      onBottomHit();
      setInitialLoad(false);
    }
  }, [onBottomHit, loadOnMount, initialLoad]);

  useEffect(() => {
    const onScroll = () => {
      if (!isLoading && hasMoreData && isBottom(contentRef)) {
        onBottomHit();
      }
    };
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [onBottomHit, isLoading, hasMoreData]);

  return <StyledContainer ref={contentRef}>{children}</StyledContainer>;
};

export default InfiniteScroll;
