import { Cards } from 'components';
import { Title } from 'components/common/Title/Title';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllDataCars } from '../../redux/dataSlice/operations';

export default function Favorites() {
  const dispatch = useDispatch();
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    dispatch(fetchAllDataCars(1)).then(response => {
      setAllData(prevData => [...prevData, ...response.payload]);
    });
  }, [dispatch]);

  const favoriteData = allData.filter(({ isFavorite }) => isFavorite === true);

  return (
    <div>
      {favoriteData.length ? (
        <Cards data={favoriteData}/>
      ) : (
        <Title>You have not selected any offer</Title>
      )}
    </div>
  );
}
