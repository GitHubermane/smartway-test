import { type FC } from 'react';
import { Button } from 'components';
import styles from './styles.module.css';

type PropsType = {
  href: string;
  stars: number;
  forks: number;
  avatar: string;
};

export const Item: FC<PropsType> = ({
  avatar, forks, href, stars, 
}) => (
  <div className={styles.item}>
    <img
      className={styles.item__avatar}
      src={avatar}
      alt="avatar"
    />
    <span className={styles.item__text}>{`Forks: ${forks}`}</span>
    <span className={styles.item__text}>{`Stars: ${stars}`}</span>
    <a href={href}>{href}</a>
    <Button onClick={() => {}}>Подробнее</Button>
  </div>
);
