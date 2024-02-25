import { Cards, Filters } from 'components/index.js';
import React, { useEffect, useState } from 'react';
import { CatalogStyled } from './Catalog.styled';
import { LoadMore } from 'components/common';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllDataCars } from '../../redux/dataSlice/operations';

export default function Catalog() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  
  const data = useSelector(state => state.data.adverts);

  useEffect(() => {
    dispatch(fetchAllDataCars({ page}));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <CatalogStyled>
      <Filters />
      {data.length > 0 && (
        <>
          <Cards />
           <LoadMore buttonClick={handleLoadMore}/>
        </>
      )}
    </CatalogStyled>
  );
}
