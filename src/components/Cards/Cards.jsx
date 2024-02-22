import { fetchData } from 'api';
import { Card } from 'components';
import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'
import { CardsList } from './Cards.styled';


export const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchAllCards = async () => {
      try {
        const cars = await fetchData();

        setCards(cars);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllCards();
  }, []);

  console.log(cards);

  return (
    <CardsList>
      {cards.map((card) => (<Card key={nanoid()} card={card}/>))}
    </CardsList>
  );
};
