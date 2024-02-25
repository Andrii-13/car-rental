// import React, { useState } from 'react';
// import photo from 'data/image/traktor.jpg';
// import {
//   BrandWrap,
//   Btn,
//   CardStyled,
//   DescriptionWrap,
//   FunctionalitiesStyled,
//   HeartBtn,
//   HeartImg,
//   HeartImgActiv,
//   ImgWrap,
//   TitleWrap,
// } from './Card.styled';
// import UniversalModal from 'components/Modal/Modal';
// import { ModalCard } from 'components';
// import { useDispatch, useSelector } from 'react-redux';
// import { isfavorite } from '../../redux/dataSlice/dataSlice';

// export const Card = ({ card }) => {
//   const [isActive, setIsActive] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [idCar, setIdCar] = useState(null);

//   const {
//     id,
//     year,
//     make,
//     model,
//     type,
//     address,
//     rentalPrice,
//     functionalities,
//     img,
//     rentalCompany,
//   } = card;

//   const toggleClick = () => {
//     setIsActive(!isActive);
//   };

//   const openModal = e => {
//     setIsOpen(true);
//     setIdCar(e.target.id);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//     document.body.style.overflow = 'auto';
//   };

//   return (
//     <CardStyled>
//       <ImgWrap>
//         <img src={img ?? photo} alt={model} width={274} height={268} />
//         <HeartBtn onClick={toggleClick}>
//           {isActive ? <HeartImgActiv /> : <HeartImg />}
//         </HeartBtn>
//       </ImgWrap>
//       <div>
//         <TitleWrap>
//           <BrandWrap>
//             <span>{make}</span>
//             <span className="modelCar">{model},</span>
//             <span>{year}</span>
//           </BrandWrap>
//           <span>{rentalPrice}</span>
//         </TitleWrap>
//         <DescriptionWrap>
//           <p>{address.split(',')[1].trim()}</p>
//           <p>{address.split(',')[2].trim()}</p>
//           <p>{rentalCompany}</p>
//           <p>{type}</p>
//           <p>{model}</p>
//           <p>{id}</p>
//           <FunctionalitiesStyled>{functionalities[0]}</FunctionalitiesStyled>
//         </DescriptionWrap>
//         <>
//           {isOpen && (
//             <UniversalModal isOpen={isOpen} onClose={closeModal}>
//               <ModalCard id={idCar} />
//             </UniversalModal>
//           )}
//         </>
//         <Btn id={id} type="button" onClick={openModal}>
//           Learn more
//         </Btn>
//       </div>
//     </CardStyled>
//   );
// };

import React, { useState } from 'react';
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
import { addFavorite, delFavorite } from '../../redux/dataSlice/dataSlice';

export const Card = ({ card }) => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [idCar, setIdCar] = useState(null);
  const visibleAdverts = useSelector(state => state.data.adverts);
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

  const toggleClick = e => {
    setIsActive(!isActive);
    if (isActive === false) {
      const favoriteAdvert = visibleAdverts.find(
        ({ id }) => id === e.currentTarget.id
      );
      const updatedFavoriteAdvert = {
        ...favoriteAdvert,
        isFavorite: true,
      };
      dispatch(addFavorite(updatedFavoriteAdvert));
    }else {
      const notFavoriteAdvert = visibleAdverts.find(
        ({ id }) => id === e.currentTarget.id
      );
      
      const updatedFavoriteAdvert = {
        ...notFavoriteAdvert,
        isFavorite: false,
      };
      dispatch(delFavorite(updatedFavoriteAdvert));
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
