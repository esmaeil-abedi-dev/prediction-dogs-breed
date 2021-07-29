import React, { ReactElement, ReactNode, useRef } from 'react';
// Hardcode Text
import findText from '../replace-hardcode-text';
// Styles
import styles from './layout.module.css';

interface IProps {
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ children }: IProps): ReactElement => {
  const topRefElement = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    if (topRefElement.current) {
      topRefElement.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className={styles.container}>
      <div ref={topRefElement} />
      {children}
      <button
        type='button'
        onClick={handleClick}
        className={styles.backToTopButton}
      >
        {findText('top')}
      </button>
    </div>
  );
};

export default Layout;
