/* eslint-disable react/prefer-stateless-function */
import React from 'react';
// Styles
import styles from './image-lazy-loader.module.css';

interface IProps {
  photoUrl: string;
}

export default class ImageLazyLoader extends React.Component<IProps> {
  imageElement: React.RefObject<HTMLImageElement>;

  intercectionObserver: IntersectionObserver | null;

  photoUrl: string;

  constructor(props: IProps) {
    super(props);
    this.imageElement = React.createRef();
    this.intercectionObserver = null;
    ({ photoUrl: this.photoUrl } = props);
  }

  componentDidMount(): void {
    this.intercectionObserver = new IntersectionObserver(
      this.handleInterseptionCallback,
      {
        rootMargin: '50px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );
    if (this.imageElement.current) {
      this.intercectionObserver.observe(this.imageElement.current);
    }
  }

  handleInterseptionCallback = (entries: IntersectionObserverEntry[]): void => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      const { isIntersecting } = entry;
      if (isIntersecting) {
        if (this.imageElement.current && this.intercectionObserver) {
          this.imageElement.current.src = this.photoUrl;
          this.intercectionObserver.disconnect();
        }
      }
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <img ref={this.imageElement} alt='images' />
      </div>
    );
  }
}
