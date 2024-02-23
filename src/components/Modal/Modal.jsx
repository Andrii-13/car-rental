import Modal from 'react-modal';
import modalStyles from './Modal.styled';
import { MdClose } from 'react-icons/md';
import { ModalCloseButton } from './Modal.styled';
import { useTheme } from 'styled-components';

const UniversalModal = ({ isOpen, onClose, children, content }) => {
    const theme = useTheme();
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        ...modalStyles,
        content: {
          ...modalStyles.content,
          backgroundColor: theme.mainBackgroundColor,
         
        },
      }}
      ariaHideApp={false}
    >
      <ModalCloseButton onClick={onClose}>
        <MdClose fill= {theme.closeButton} />
      </ModalCloseButton>
      {children}
      {content}
    </Modal>
  );
};

export default UniversalModal;