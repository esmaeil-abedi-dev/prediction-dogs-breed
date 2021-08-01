import React, { ReactElement, ReactNode } from 'react';
// Styles
import styles from './layout.module.css';

interface IProps {
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ children }: IProps): ReactElement => (
  <div className={styles.container}>{children}</div>
);

export default Layout;
