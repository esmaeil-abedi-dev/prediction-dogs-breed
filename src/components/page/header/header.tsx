import React, { ReactElement, useState } from 'react';
// Hardcode Text
import findText from '../../../replace-hardcode-text';
// Component
import FileUploader from '../../common/file-uploader';
import ImagePreviewer from '../../common/image-previewer';
import PredictionItem from '../../common/prediction-item/prediction-item';
// Styles
import styles from './header.module.css';

interface IProps {
  analyzing: boolean;
  selectedBreed: string;
  mappedPredictions: string[];
  onBreedClick: (param: string) => void;
  onSelectedImage: (selectedImage: File) => void;
}

const Header: React.FC<IProps> = ({
  analyzing,
  mappedPredictions,
  selectedBreed,
  onBreedClick,
  onSelectedImage,
}: IProps): ReactElement => {
  const [imageFile, setImageFile] = useState<File>();
  const handleFileUpload = (uploadedFile: File) => {
    setImageFile(uploadedFile);
    onSelectedImage(uploadedFile);
  };
  return (
    <div className={styles.container}>
      <div className={styles.uploaderContainer}>
        <FileUploader onFileUpload={handleFileUpload} />
        {imageFile && (
          <div className={styles.imageThumb}>
            <ImagePreviewer imageFile={imageFile} />
          </div>
        )}
      </div>
      {analyzing && <h1>{findText('analyzing')}</h1>}
      {mappedPredictions.length > 0 ? (
        <div className={styles.predictionsContainer}>
          <div className={styles.predictionsContainerTitle}>
            <span>{findText('selectPredictions')}</span>
          </div>
          <div className={styles.predictionsContainerContnet}>
            {mappedPredictions.map((mappedPrediction: string) => (
              <PredictionItem
                key={mappedPrediction}
                content={mappedPrediction}
                onClick={onBreedClick}
                isPredictionSelected={selectedBreed === mappedPrediction}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
