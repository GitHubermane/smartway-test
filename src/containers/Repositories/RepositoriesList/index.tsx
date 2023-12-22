import type { FC } from 'react';
import type { Repository } from 'types';
import { RepositoryStore } from 'store';
import { Item } from './Item';
import styles from './styles.module.css';

type PropsType = {
  repositories: Repository[];
};

export const RepositoriesList: FC<PropsType> = ({ repositories }) => {
  const { error } = RepositoryStore;

  return (
    <div className={styles.repostitories_list}>
      <div className={styles.repostitories_list__container}>
        <div>
          {error ? (
            <div className={styles.error}>{error.message}</div>
          ) : (
            repositories.map(
              ({
                forks_count, stargazers_count, id, owner, html_url, 
              }) => (
                <Item
                  key={id}
                  id={id}
                  forks={forks_count}
                  stars={stargazers_count}
                  avatar={owner.avatar_url}
                  href={html_url}
                />
              ),
            )
          )}
        </div>
      </div>
    </div>
  );
};
