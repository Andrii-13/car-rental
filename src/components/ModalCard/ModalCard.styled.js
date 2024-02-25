import { DescriptionWrap} from 'components/Card/Card.styled';
import { Button } from 'components/common';
import styled from 'styled-components';

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 24px;
`;

export const DescriptionWrapper = styled(DescriptionWrap)`
  word-wrap: normal;
  overflow: visible;
  text-overflow: clip;
  margin-bottom: 14px;

  p {
    opacity: 50%;
    font-size: 12px;
    line-height: 1.5;
  }
`;
export const TitleDescr = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 8px;
`;

export const DescAccessories = styled(DescriptionWrapper)`
  margin-bottom: 24px;
`;

export const RentalConditWrap = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;

  p {
    letter-spacing: -2%;
    display: block;
    padding: 7px 14px;
    background-color: ${p=>p.theme.secondaryBackgroundColor};
    border-radius: 35px;
  }
  span {
    font-weight: 600;
    color: ${p=>p.theme.blueColor};
  }
`;

export const BtnModal = styled(Button)`
padding: 12px 50px;
`