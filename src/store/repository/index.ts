import { makeAutoObservable, runInAction } from 'mobx';
import { RepositoryService } from 'services';
import { Repository } from 'types';

class RepositoryStore {
  repositories: Repository[] = [];
  favourites: Repository[] = [];
  isLoading: boolean = false;
  error: null | Error = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchRepositories = async (search: string, count: number, page: number) => {
    try {
      runInAction(() => {
        this.isLoading = true;
        this.error = null;
      });

      const { data } = await RepositoryService.getRepositories(
        search,
        count,
        page
      );

      const repositories = data.items;

      runInAction(() => {
        this.repositories = repositories;
      });
    } catch (error) {
      if (error instanceof Error) {
        this.error = error;
      }
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };
}
export default new RepositoryStore();
