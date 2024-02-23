import { Cards, Filters } from 'components/index.js';
import React from 'react';
import { CatalogStyled } from './Catalog.styled';
import { LoadMore } from 'components/common/LoadMore/LoadMore';

export default function Catalog() {
  return (
    <CatalogStyled>
      <Filters />
      <Cards />
      <LoadMore />
    </CatalogStyled>
  );
}
