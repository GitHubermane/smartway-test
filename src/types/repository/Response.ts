import type { Repository } from './Repository';

export type RepositoryResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: Repository[];
};
