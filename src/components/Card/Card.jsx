import React, { useEffect, useState } from 'react';
import photo from 'data/image/traktor.jpg';
import {
  BrandWrap,
  Btn,
  CardStyled,
  DescriptionWrap,
  FunctionalitiesStyled,
  HeartBtn,
  HeartImg,
  HeartImgActiv,
  ImgWrap,
  TitleWrap,
} from './Card.styled';
import UniversalModal from 'components/Modal/Modal';
import { ModalCard } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteCards } from '../../redux/favoriteSlice/favoriteSlice';

export const Card = ({ card }) => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [idCar, setIdCar] = useState(null);
  const visibleAdverts = useSelector(state => state.data.adverts);
  const favoriteAverts = useSelector(state => state.favorite.favorite);
  const dispatch = useDispatch();
  const {
    id,
    year,
    make,
    model,
    type,
    address,
    rentalPrice,
    functionalities,
    img,
    rentalCompany,
  } = card;

  const activeCard = favoriteAverts.find(
    favoriteAvert => favoriteAvert.id === id
  );

  useEffect(() => {
    if (activeCard) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [activeCard]);

  const toggleClick = e => {
    setIsActive(!isActive);
    const advert = visibleAdverts.find(({ id }) => id === e.currentTarget.id);
    if(!isActive){
      dispatch(favoriteCards(advert));
    }
  };

  const openModal = e => {
    setIsOpen(true);
    setIdCar(e.target.id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <CardStyled>
      <ImgWrap>
        <img src={img ?? photo} alt={model} width={274} height={268} />
        <HeartBtn id={id} onClick={toggleClick}>
          {isActive ? <HeartImgActiv id={id} /> : <HeartImg id={id} />}
        </HeartBtn>
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
          <p>{address.split(',')[1].trim()}</p>
          <p>{address.split(',')[2].trim()}</p>
          <p>{rentalCompany}</p>
          <p>{type}</p>
          <p>{model}</p>
          <p>{id}</p>
          <FunctionalitiesStyled>{functionalities[0]}</FunctionalitiesStyled>
        </DescriptionWrap>
        <>
          {isOpen && (
            <UniversalModal isOpen={isOpen} onClose={closeModal}>
              <ModalCard id={idCar} />
            </UniversalModal>
          )}
        </>
        <Btn id={id} type="button" onClick={openModal}>
          Learn more
        </Btn>
      </div>
    </CardStyled>
  );
};
