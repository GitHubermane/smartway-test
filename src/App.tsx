import { Layout } from 'components';
import { Navigate, Route, Routes } from 'react-router-dom';
import { REPOSITORIES_ROUTE, routes } from 'routes';

const App = () => (
  <Layout>
    <Routes>
      <Route
        path="/"
        element={<Navigate to={REPOSITORIES_ROUTE} />}
      />
    </Routes>

    {routes.map(({ path, Component, id }) => (
      <Routes key={id}>
        <Route
          path={path}
          element={<Component />}
        />
      </Routes>
    ))}
  </Layout>
);

export default App;
