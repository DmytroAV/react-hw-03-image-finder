import PropTypes from 'prop-types';
import { Overlay, ModalImg } from './Modal.styled';

export const Modal = ({ largeImageURL }) => {
  return (
    <>
      <Overlay>
        <ModalImg>
          <img src={largeImageURL} alt="" />
        </ModalImg>
      </Overlay>
    </>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
};
