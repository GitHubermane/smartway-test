import { starFilledIcon, starIcon } from 'assets';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { RepositoryStore } from 'store';
import styles from './style.module.css';

type PropsType = {
  id: number;
};

export const ToggleFavouriteBtn: FC<PropsType> = observer(({ id }) => {
  const { favourites, addToFavorite, removeFromFavorite } = RepositoryStore;

  const isFavourite = favourites.some((f) => f.id === id);

  const onToggleFavoriteClick = () => {
    isFavourite ? removeFromFavorite(id) : addToFavorite(id);
  };

  return (
    <button
      className={styles.btn}
      onClick={onToggleFavoriteClick}
    >
      <img
        src={isFavourite ? starFilledIcon : starIcon}
        alt="Star icon"
      />
    </button>
  );
});
