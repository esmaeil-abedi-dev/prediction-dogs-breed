import React, { ReactElement, useCallback, useEffect, useState } from 'react';
// Hardcode Text
import findText from '../../../replace-hardcode-text';
// Services
import breedServiceProvider from '../../../services/breed';
// Style
import styles from './prediction-item.module.css';

interface IProps {
  content: string;
  isPredictionSelected: boolean;
  onClick: (param: string) => void;
}

const PredictionItem: React.FC<IProps> = ({
  content,
  onClick,
  isPredictionSelected,
}: IProps): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>('');

  const getRandomImage = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await breedServiceProvider.getRandomImagesByBreedType(
        content,
      );
      setImageUrl(data.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [content]);

  useEffect(() => {
    getRandomImage();
  }, [getRandomImage]);
  return (
    <span
      onClick={() => onClick(content)}
      className={
        isPredictionSelected
          ? `${styles.container} ${styles.selected}`
          : `${styles.container}`
      }
    >
      {content}
      {loading ? (
        <div>{findText('loading')}</div>
      ) : (
        <img src={imageUrl} alt='randomImage' />
      )}
    </span>
  );
};

export default PredictionItem;
