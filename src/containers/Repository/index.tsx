import { useNavigate, useParams } from 'react-router-dom';
import { RepositoryStore } from 'store';
import { dateFormat } from 'utils';
import { REPOSITORIES_ROUTE } from 'routes';
import styles from './styles.module.css';

export const Repository = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { repositories } = RepositoryStore;

  const repository = repositories.find((r) => r.id === Number(id));

  const formatedDate = repository?.created_at
    ? dateFormat(repository?.created_at)
    : '';

  const onBackClick = () => navigate(REPOSITORIES_ROUTE);

  return (
    <div>
      <div className={styles.repository}>
        <button
          className={styles.back_btn}
          onClick={onBackClick}
        >
          Back
        </button>
        <h3>{repository?.name}</h3>
        <span>{`Descritpion: ${repository?.description}`}</span>
        <span>{`Created at: ${formatedDate}`}</span>
        <span>
          {'Repository link: '}
          <a
            href={repository?.html_url}
            target="_blank"
            rel="noreferrer"
          >
            {repository?.html_url}
          </a>
        </span>
        <span>{`Forks: ${repository?.forks}`}</span>
        <span>{`Stars: ${repository?.stargazers_count}`}</span>
        <span>{`Watchers: ${repository?.watchers_count}`}</span>
      </div>
      <div className={styles.repository}>
        <h3>Owner Info</h3>
        <img
          className={styles.repository_img}
          src={repository?.owner.avatar_url}
          alt="avatar"
        />
        <span>{`Login: ${repository?.owner.login}`}</span>
        <span>
          <a href={repository?.owner.html_url}>{repository?.owner.html_url}</a>
        </span>
      </div>
    </div>
  );
};
