import { Button } from 'components/common';
import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  align-items: end;
  justify-content: center;
  gap: 18px; 
`;
export const SelectWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  select {
    border: none;
    background-color: ${p => p.theme.inputBackgroundColor};
    padding: 14px 0 14px 18px;
    line-height: 1.11;
  }

  .priceSelectStyle{
    width: 125px;
  }
  .brandSelectStyle{
    width: 224px;
  }
`;
export const LabelStyled = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  color: ${p => p.theme.secondFontColor};
`;

export const InputsWrap = styled.div`
  display: flex;
  align-items: end;

  .input-right {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .input-left {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 1px solid rgba(128, 128, 128, 0.2);
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  input {
    border: none;
    background-color: ${p => p.theme.inputBackgroundColor};
    height: 48px;
    width: 160px;
    padding: 14px 0 14px 24px;
  }
  input::placeholder {
    color: ${p => p.theme.mainFontColor};
  }
`;

export const Btn = styled(Button)`
padding: 14px 44px;
`