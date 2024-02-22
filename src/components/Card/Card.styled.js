import { Button } from 'components/common';
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
  width: 100%;
  height: auto;
  border-radius: 14px;
  overflow: hidden;
`;
export const TitleWrap = styled.h3`
  display: flex;
  justify-content: space-between;
`;
export const BrandWrap = styled.div`
  .modelCar {
    margin: 0 4px;
    color: ${p => p.theme.blueColor};
  }
`;
export const DescriptionWrap = styled.div`
display: flex;
flex-wrap: wrap;
gap: 12px;
`

export const Btn = styled(Button)`

width: 100%;
height: 44px;
`