import { Cards } from 'components';
import { Title } from 'components/common/Title/Title';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Favorites() {
  const favoriteData = useSelector(state => state.data.isfavorite);
  console.log(favoriteData);
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
