import { observer } from 'mobx-react-lite';
import { RepositoryStore } from 'store';

import { RepositoriesList } from './RepositoriesList';
import styles from './styles.module.css';
import { RepositoryForm } from './RepositoryForm';

export const Repositories = observer(() => {
  const { repositories, favourites, isLoading } = RepositoryStore;

  return (
    <>
      <RepositoryForm />
      <div className={styles.repositories}>
        <div>
          <h2>Список репозиториев</h2>
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <RepositoriesList repositories={repositories} />
          )}
        </div>
        {favourites.length !== 0 && (
          <div className={styles.repositories__favourites}>
            <h2>Список избранных репозиториев</h2>
            <RepositoriesList repositories={favourites} />
          </div>
        )}
      </div>
    </>
  );
});
