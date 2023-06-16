import PropTypes from 'prop-types';
import { ContainerImage, ImageWeb } from './ImageGalleryItem.styled';
// import { Modal } from '../Modal/Modal';

export const ImageGalleryItem = ({ webImage, largeImage }) => {
  // console.log('item :>> ', this.prop.item);
  return (
    <>
      {/* <Modal largeImageURL={largeImage} /> */}
      <ContainerImage className="gallery-item">
        <ImageWeb src={webImage} alt="Images and photos" />
      </ContainerImage>
    </>
  );
};

ImageGalleryItem.propTypes = {
  webImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
};
