import React from 'react';
import photo from 'data/image/homer.jpg';
import { BrandWrap, Btn, CardStyled, DescriptionWrap, ImgWrap, TitleWrap } from './Card.styled';

export const Card = () => {
  return (
    <CardStyled>
      <ImgWrap>
        <img src={photo} alt="" width={274} height={268} />
      </ImgWrap>
      <div>
        <TitleWrap>
          <BrandWrap>
            <span >Subaru</span>
            <span className='modelCar'>XC60</span>
            <span>2016</span>
          </BrandWrap>
          <span>$45</span>
        </TitleWrap>

        <DescriptionWrap>
          <p>Kyiv</p>
          <p>Ukraine</p>
          <p>Adventure Car Rentals</p>
          <p>Premium</p>
          <p>Suv</p>
          <p>Subaru</p>
          <p>9590</p>
          <p>Power moonroof</p>
        </DescriptionWrap>
        <div>
          <Btn type="button">Learn more</Btn>
        </div>
      </div>
    </CardStyled>
  );
};
