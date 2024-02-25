import { fetchCardById } from 'api';
import React, { useEffect, useState } from 'react';
import photo from 'data/image/traktor.jpg';
import { BrandWrap, ImgWrap, TitleWrap } from 'components/Card/Card.styled';
import {
  BtnModal,
  DescAccessories,
  Description,
  DescriptionWrapper,
  RentalConditWrap,
  TitleDescr,
} from './ModalCard.styled';

export const ModalCard = ({ id }) => {
  const [car, setCar] = useState(null);

  useEffect(() => {
    const CardById = async id => {
      try {
        const car = await fetchCardById(id);
        setCar(car);
      } catch (error) {
        console.log(error);
      }
    };

    CardById(id);
  }, [id]);

  return (
    <>
      {car && (
        <div>
          <ImgWrap>
            <img
              src={car.img ?? photo}
              alt={car.model}
              width={460}
              height={248}
            />
          </ImgWrap>
          <TitleWrap>
            <BrandWrap>
              <span>{car.make}</span>
              <span className="modelCar">{car.model},</span>
              <span>{car.year}</span>
            </BrandWrap>
          </TitleWrap>
          <DescriptionWrapper>
            <p>{car.address.split(',')[1].trim()}</p>
            <p>{car.address.split(',')[2].trim()}</p>
            <p>id: {car.id}</p>
            <p>Year: {car.year}</p>
            <p>Type: {car.type}</p>
            <p>Fuel Consumption: {car.fuelConsumption}</p>
            <p>Engine Size: {car.engineSize}</p>
          </DescriptionWrapper>
          <Description>{car.description}</Description>
          <TitleDescr>Accessories and functionalities:</TitleDescr>
          <DescAccessories>
            <p>{car.accessories[0]}</p>
            <p>{car.accessories[1]}</p>
            <p>{car.accessories[2]}</p>
            <p>{car.functionalities[0]}</p>
            <p>{car.functionalities[1]}</p>
            <p>{car.functionalities[2]}</p>
          </DescAccessories>
          <TitleDescr>Rental Conditions:</TitleDescr>
          <RentalConditWrap>
            <p>
              Minimum age:{' '}
              <span>
                {car.rentalConditions
                  .split('\n')[0]
                  .trim()
                  .split(':')[1]
                  .trim()}
              </span>
            </p>
            <p>{car.rentalConditions.split('\n')[1].trim()}</p>
            <p>{car.rentalConditions.split('\n')[2].trim()}</p>
            <p>
              Mileage:{' '}
              <span>
                {car.mileage.toLocaleString('en-US', {
                  useGrouping: true,
                })}
              </span>
            </p>
            <p>
              Price: <span>{car.rentalPrice}</span>
            </p>
          </RentalConditWrap>
          <BtnModal>Rental car</BtnModal>
        </div>
      )}
    </>
  );
};
