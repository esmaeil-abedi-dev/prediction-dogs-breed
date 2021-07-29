import React, { ReactElement } from 'react';
// Hardcode text
import findText from '../../../replace-hardcode-text';
// Component
import PhotoGallery from '../photo-gallery';
// Styles
import styles from './main.module.css';

interface IProps {
  loading: boolean;
  imagesUrl: string[];
}

const Main: React.FC<IProps> = ({
  loading,
  imagesUrl,
}: IProps): ReactElement => (
  <div className={styles.container}>
    {loading ? (
      <h1>{findText('loading')}</h1>
    ) : (
      <PhotoGallery imagesUrl={imagesUrl} />
    )}
  </div>
);

export default Main;
