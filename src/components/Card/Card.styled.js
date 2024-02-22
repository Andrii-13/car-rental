import { Button } from 'components/common';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from "react-icons/fa6";
import styled from 'styled-components';

export const CardStyled = styled.li`
  display: flex;
  flex-direction: column;
  width: 274px;
  height: 426px;
  border-radius: 14px;

  p {
    opacity: 50%;
    font-size: 12px;
    line-height: 1.5;
  }
`;

export const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 14px;
`;

export const TitleWrap = styled.h3`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export const BrandWrap = styled.div`
  width: 90%;
  white-space: nowrap; /* Запобігає переносу тексту */
  overflow: hidden; /* Ховає текст, який не поміщається */
  text-overflow: ellipsis; /* Відображає знак многоточія, якщо текст обрізаний */

  .modelCar {
    margin: 0 4px;
    color: ${p => p.theme.blueColor};
  }
`;
export const DescriptionWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
  row-gap: 4px;
  height: 40px;
  margin-bottom: 28px;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FunctionalitiesStyled = styled.p`
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Btn = styled(Button)`
  width: 100%;
  height: 44px;
`;

export const HeartBtn = styled.button`
  position: absolute;
  display: block;
  width: 18px;
  height: 18px;
  background-color: inherit;
  top: 14px;
  right: 14px;

`;

export const HeartImg = styled(FaRegHeart)`
  fill: ${p => p.theme.buttonFontColor};
  opacity: 0.8;
  height: 18px;
  width: 18px;
`;

export const HeartImgActiv = styled(FaHeart )`
  fill: ${p => p.theme.buttonColor};
  height: 18px;
  width: 18px;
`;