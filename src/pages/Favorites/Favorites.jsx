import { Cards } from 'components';
import { Title } from 'components/common/Title/Title';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllDataCars } from '../../redux/dataSlice/operations';

export default function Favorites() {
  const dispatch = useDispatch();
  const [allData, setAllData] = useState([]); // Масив для зберігання всіх отриманих даних
  
  const data = useSelector(state => state.data.adverts);

  useEffect(() => {
    dispatch(fetchAllDataCars(1)).then(response => {
      setAllData(prevData => [...prevData, ...response.payload]);
    });
  }, [dispatch]);

const favoriteData = allData.filter(({isFavorite}) => isFavorite === true )

console.log(favoriteData)
console.log(data)
  return (
    <div>
      {favoriteData.length ? (
        <Cards data={favoriteData} />
      ) : (
        <Title>You have not selected any offer</Title>
      )}
    </div>
  );
}


