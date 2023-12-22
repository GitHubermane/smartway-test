import { useParams } from 'react-router-dom';

export const Repository = () => {
  const { id } = useParams();
  return (
    <div>
      Repository
      {id}
    </div>
  );
};
