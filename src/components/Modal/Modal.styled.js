import styled from "styled-components";

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: #666;
  font-size: 16px;
  cursor: pointer;
  z-index: 1001;
`;

const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(18, 20, 23, 0.5)',
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',   
      borderRadius: '24px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      width: "540px",
      height: 'fit-content',
      padding: '40px', 
    },
  };
  
  export default modalStyles;