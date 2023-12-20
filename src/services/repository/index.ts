import { $api } from 'api';
import type { AxiosResponse } from 'axios';
import type { RepositoryResponse } from 'types';

class RepositoryService {
  static getRepositories = async (
    search: string,
    count?: number,
    page?: number
  ): Promise<AxiosResponse<RepositoryResponse>> => {
    const countQuery = count ? `&per_page=${count}` : '';
    const pageQuery = page ? `&page=${page}` : '';
    return $api.get<RepositoryResponse>(
      `?q=${search}${countQuery}${pageQuery}`
    );
  };
}

export default RepositoryService;
