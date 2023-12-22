import { Button, CopyButton, Input } from 'components';
import { useRef, useState } from 'react';
import { RepositoryStore } from 'store';
import styles from './styles.module.css';

export const RepositoryForm = () => {
  const [text, setText] = useState('');
  const throttleInProgress = useRef<boolean>();

  const { fetchRepositories } = RepositoryStore;

  const onFetchDataClick = async () => {
    await fetchRepositories(text, 5, 0);
  };

  const throttledClick = (delay: number) => {
    if (throttleInProgress.current) return;

    throttleInProgress.current = true;

    onFetchDataClick();

    setTimeout(() => {
      throttleInProgress.current = false;
    }, delay);
  };

  return (
    <div className={styles.repository_form}>
      <Input
        value={text}
        onChange={setText}
        placeholder="Enter repository name"
      />
      <Button onClick={() => throttledClick(3000)}>Find</Button>
      <CopyButton text={text} />
    </div>
  );
};
