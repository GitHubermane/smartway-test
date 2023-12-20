import type { FC } from 'react';
import type { Repository } from 'types';
import { Item } from './Item';

type PropsType = {
  repositories: Repository[];
};

export const RepositoriesList: FC<PropsType> = ({ repositories }) => (
  <div>
    {repositories.map(
      ({
        forks_count, stargazers_count, id, owner, html_url, 
      }) => (
        <Item
          key={id}
          forks={forks_count}
          stars={stargazers_count}
          avatar={owner.avatar_url}
          href={html_url}
        />
      ),
    )}
  </div>
);
