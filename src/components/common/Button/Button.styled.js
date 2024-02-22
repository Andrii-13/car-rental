import styled from "styled-components";

export const ButtonStyled = styled.button`
font-weight: 600;
font-size: 14px;
background-color: ${p => p.theme.buttonColor};
color: ${p => p.theme.buttonFontColor};
border-radius: 12px;
`