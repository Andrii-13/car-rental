// import Layout from 'components/Layout/Layout';
// import { Route, Routes } from 'react-router-dom';

import { Catalog } from 'components/Catalog/Catalog';
import { Container, Section } from './App.styled';

export const App = () => {
  return (
    // <Routes>
    //   <Route path="/" element={Layout}></Route>
    // </Routes>

    <Section>
      <Container>
        <Catalog />
      </Container>
    </Section>
  );
};
