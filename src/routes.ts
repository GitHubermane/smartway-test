import { RepositoriesPage, RepositoryPage } from 'pages';

export const REPOSITORIES_ROUTE = '/repositories';

export const routes = [
  {
    id: 0,
    path: REPOSITORIES_ROUTE,
    Component: RepositoriesPage,
  },
  {
    id: 1,
    path: `${REPOSITORIES_ROUTE}/:id`,
    Component: RepositoryPage,
  },
];
