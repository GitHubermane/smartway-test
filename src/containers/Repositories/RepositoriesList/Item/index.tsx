import { type FC } from 'react';
import { Button, ToggleFavouriteBtn } from 'components';
import { useNavigate } from 'react-router-dom';
import { REPOSITORIES_ROUTE } from 'routes';
import styles from './styles.module.css';

type PropsType = {
  id: number;
  href: string;
  stars: number;
  forks: number;
  avatar: string;
};

export const Item: FC<PropsType> = ({
  avatar, forks, href, stars, id, 
}) => {
  const navigate = useNavigate();
  const onNavigateClick = () => navigate(`${REPOSITORIES_ROUTE}/${id}`);

  return (
    <div className={styles.item}>
      <img
        className={styles.item__avatar}
        src={avatar}
        alt="avatar"
      />

      <span className={styles.item__text}>{`Forks: ${forks}`}</span>
      <span className={styles.item__text}>{`Stars: ${stars}`}</span>

      <a
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {href}
      </a>

      <div className={styles.item__btn_block}>
        <Button onClick={onNavigateClick}>Подробнее</Button>
        <ToggleFavouriteBtn id={id} />
      </div>
    </div>
  );
};
