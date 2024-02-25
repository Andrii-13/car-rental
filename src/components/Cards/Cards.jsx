import { Card } from 'components';
import React from 'react';
import { nanoid } from 'nanoid';
import { CardsList } from './Cards.styled';

export const Cards = ({ data}) => {
  return (
    <>
      {data.length > 0 && (
        <CardsList>
          {data.map(card => (
            <Card key={nanoid()} card={card} />
          ))}
        </CardsList>
      )}
    </>
  );
};