import { Cards } from 'components';
import { Title } from 'components/common/Title/Title';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Favorites() {
  const favoriteAverts = useSelector(state => state.favorite.favorite);

  return (
    <div>
      {favoriteAverts.length ? (
        <Cards data={favoriteAverts} />
      ) : (
        <Title>You have not selected any offer</Title>
      )}
    </div>
  );
}
