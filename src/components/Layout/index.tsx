import type { FC, ReactNode } from 'react';
import styles from './styles.module.css';

type PropsType = {
  children: ReactNode;
};

export const Layout: FC<PropsType> = ({ children }) => (
  <div className={styles.layout}>{children}</div>
);
