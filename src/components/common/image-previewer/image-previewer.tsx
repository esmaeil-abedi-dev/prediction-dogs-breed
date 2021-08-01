import React, { ReactElement } from 'react';
// Style
import styles from './image-previewer.module.css';

interface IProps {
  imageFile: File;
}

const ImagePreviewer: React.FC<IProps> = ({
  imageFile,
}: IProps): ReactElement => (
  <img
    className={styles.imageFile}
    src={URL.createObjectURL(imageFile)}
    alt='File Uploaded'
  />
);

export default ImagePreviewer;
