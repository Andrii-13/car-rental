import { Cards } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Favorites() {
  const favoriteData = useSelector(state => state.data.isfavorite);
  console.log(favoriteData);
  return (
    <div>
      <Cards data={favoriteData} />
    </div>
  );
}
