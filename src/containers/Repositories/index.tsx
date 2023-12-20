import { observer } from 'mobx-react-lite';
import { RepositoryStore } from 'store';
import { useEffect } from 'react';
import { RepositoriesList } from './RepositoriesList';

export const Repositories = observer(() => {
  const {
    repositories, favourites, fetchRepositories, isLoading, 
  } =
    RepositoryStore;

  const fetch = async () => {
    fetchRepositories('k', 3, 1);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <div>
        <h2>Список репозиториев</h2>
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <RepositoriesList repositories={repositories} />
        )}
      </div>
      {favourites.length !== 0 && (
        <div>
          <h2>Список избранных репозиториев</h2>
          <RepositoriesList repositories={favourites} />
        </div>
      )}
    </div>
  );
});
