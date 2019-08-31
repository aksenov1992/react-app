import React, { Component } from 'react';

import HeaderPage from '../components/header-page';
import ImageCard from '../components/image-card';
import PopUp from '../components/pop-up';

export default class Page extends Component {

  state = {
    cardData : [
      {title: 'Sky', src: 'https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg', id: '01'},
      {title: 'Rock', src: 'https://bipbap.ru/wp-content/uploads/2017/04/4-2.jpg', id: '02'},
      {title: 'Beach', src: 'https://bipbap.ru/wp-content/uploads/2017/04/1364841736_53-19.jpg', id: '03'}
    ],
    show : false
  }

  showPopUp = () => {
    this.setState((state) => {
      return {
      show: !state.show
      }
    });
  };

  render() {
  return (
    <>
      <HeaderPage />
      <button className="button button--new" onClick= { this.showPopUp} >new</button>
      <ImageCard cards={this.state}/>
      { this.state.show ? <PopUp show={this.showPopUp}/> : null }
    </>
  )};
}
