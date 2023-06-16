import { Component } from 'react';
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from './ImageGallery/ImageGallery';
import { GlobalStyle, ContainerApp } from './GlobalStyles.styled';

class App extends Component {
  state = {
    searchQuery: '',

  }

  handleSubmitForm = (queryForm) => {
    // console.log('e.target :>> ', e.target);
    this.setState({ searchQuery: queryForm })
  }
  render() {
    const { searchQuery } = this.state;
    console.log('searchQuery :>> ', searchQuery);
    return (
      <>
        <GlobalStyle />
        <ContainerApp className="App">
          <Searchbar onSubmit={this.handleSubmitForm} />
          <ImageGallery query={searchQuery} />
        </ContainerApp>
      </>
    );
  }
}

export default App;

