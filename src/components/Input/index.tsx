import type { ChangeEvent, FC } from 'react';
import { useId } from 'react';
import styles from './styles.module.css';

type PropsType = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

export const Input: FC<PropsType> = ({ value, onChange, placeholder }) => {
  const id = useId();

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <input
      value={value}
      onChange={onValueChange}
      className={styles.input__body}
      type="text"
      placeholder={placeholder}
      id={id}
    />
  );
};
