import type { FC } from 'react';
import styles from './styles.module.css';

type PropsType = {
  children: string;
  onClick: () => void;
};

export const Button: FC<PropsType> = ({ onClick, children }) => (
  <button
    className={styles.button}
    onClick={onClick}
  >
    {children}
  </button>
);
