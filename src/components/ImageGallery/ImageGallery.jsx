import { Component } from 'react';
import fetchImage from '../services/fetchImage';
import { Loader } from '../Loader/Loader';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { ContainerGallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  state = {
    items: [],
    isLoader: false,
    isOpen: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    this.setState({ isLoader: true });
    const query = this.props.query;
    fetchImage(query)
      .then(({ hits }) => {
        this.setState({ items: hits });
      })
      .finally(this.setState({ isLoader: false }));
  };

  handleOpenModal = () => {
    this.setState({ isOpen: true });
  };
  handleCloseModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { items, isLoader } = this.state;
    return (
      <>
        <ContainerGallery>
          {isLoader && <Loader />}
          {items &&
            items.map(item => (
              <ImageGalleryItem
                key={item.id}
                webImage={item.webformatURL}
                largeImage={item.largeImageURL}
                isOpenModal={this.handleOpenModal}
                isCloseModal={this.handleCloseModal}
              />
            ))}
        </ContainerGallery>
        <Button />
      </>
    );
  }
}

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
};

export default ImageGallery;
