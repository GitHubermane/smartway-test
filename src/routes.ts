import { RepositoriesPage, RepositoryPage } from 'pages';

export const REPOSITORIES_ROUTE = '/repositories';

export const routes = [
  {
    path: REPOSITORIES_ROUTE,
    Component: RepositoriesPage,
  },
  {
    path: `${REPOSITORIES_ROUTE}/:id`,
    Component: RepositoryPage,
  },
];
