import React from 'react';
import photo from 'data/image/traktor.jpg';
import {
  BrandWrap,
  Btn,
  CardStyled,
  DescriptionWrap,
  FunctionalitiesStyled,
  ImgWrap,
  TitleWrap,
} from './Card.styled';

export const Card = ({ card }) => {
  const {id, year, make, model, type, address, rentalPrice, mileage,functionalities, img, rentalCompany } = card;
 
  return (
    <CardStyled>
      <ImgWrap>
        <img src={img ?? photo} alt={model} width={274} height={268} />
      </ImgWrap>
      <div>
        <TitleWrap>
          <BrandWrap>
            <span>{make}</span>
            <span className="modelCar">{model},</span>
            <span>{year}</span>
          </BrandWrap>
          <span>{rentalPrice}</span>
        </TitleWrap>

        <DescriptionWrap>
          <p>{address.split(",")[1].trim()}</p>
          <p>{address.split(",")[2].trim()}</p>
          <p>{rentalCompany}</p>
          <p>{type}</p>
          <p>{model}</p>
          <p>{id}</p>
          <FunctionalitiesStyled>{functionalities[0]}</FunctionalitiesStyled>
        </DescriptionWrap>
        <div>
          <Btn type="button">Learn more</Btn>
        </div>
      </div>
    </CardStyled>
  );
};
