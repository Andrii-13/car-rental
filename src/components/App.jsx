import Layout from 'components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={Layout}></Route>
    </Routes>
  );
};
