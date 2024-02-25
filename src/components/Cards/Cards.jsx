import { Card } from 'components';
import React from 'react';
import { nanoid } from 'nanoid';
import { CardsList } from './Cards.styled';
import { useSelector } from 'react-redux';

export const Cards = ({ openModal }) => {
 const cards = useSelector(state => state.data.adverts)

  return (
    <>
      {cards.length > 0 && (
        <CardsList>
          {cards.map(card => (
            <Card key={nanoid()} card={card} openModal={openModal} />
          ))}
        </CardsList>
      )}
    </>
  );
};
