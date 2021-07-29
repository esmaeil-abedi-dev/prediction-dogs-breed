import React, { ReactElement, useRef } from 'react';
// Hardcode Text
import findText from '../../../replace-hardcode-text';
// Style
import styles from './file-upload.module.css';

interface IProps {
  onFileUpload: (uploadedFile: File) => void;
}

const FileUploader: React.FC<IProps> = ({
  onFileUpload,
}: IProps): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    if (event.target.files !== null) {
      onFileUpload(event.target.files[0]);
    }
  };
  return (
    <label htmlFor='file-uploader' className={styles.labelContainer}>
      <div className={styles.fileSelector}>{findText('selectPhoto')}</div>
      <input
        name='file-uploader'
        id='file-uploader'
        type='file'
        accept='image/*'
        className={styles.fileInput}
        onChange={handleFileUpload}
        ref={inputRef}
      />
    </label>
  );
};

export default FileUploader;
