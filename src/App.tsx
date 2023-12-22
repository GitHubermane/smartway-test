import { Layout } from 'components';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'routes';

const App = () => (
  <Layout>
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={<Component />}
        />
      ))}
    </Routes>
  </Layout>
);

export default App;
