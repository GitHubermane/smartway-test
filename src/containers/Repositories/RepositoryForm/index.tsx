import { Button, CopyButton, Input } from 'components';
import { useState } from 'react';
import { RepositoryStore } from 'store';
import { throttle } from 'utils/throttle';
import styles from './styles.module.css';

export const RepositoryForm = () => {
  const [text, setText] = useState('');

  const { fetchRepositories } = RepositoryStore;

  const onFetchDataClick = async () => {
    fetchRepositories(text, 3, 1);
  };
  const throttledFetch = throttle(onFetchDataClick, 5000);

  return (
    <div className={styles.repository_form}>
      <Input
        value={text}
        onChange={setText}
        placeholder="Enter repository name"
      />
      <Button onClick={throttledFetch}>Find</Button>
      <CopyButton text={text} />
    </div>
  );
};
