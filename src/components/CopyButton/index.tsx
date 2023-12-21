import { Button } from 'components';
import { FC, useState } from 'react';

type PropsType = {
  text: string;
};

export const CopyButton: FC<PropsType> = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const onCopyClick = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return <Button onClick={onCopyClick}>{isCopied ? 'Copied' : 'Copy'}</Button>;
};
