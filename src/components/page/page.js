import React, { Component } from 'react';


import HeaderPage from '../header-page';
import ImageCard from '../image-card';
import PopUp from '../pop-up';

export default class Page extends Component {

  state = {
    cardData : [
      {title: 'Sky', src: 'https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg', id: '01'},
      {title: 'Rock', src: 'https://bipbap.ru/wp-content/uploads/2017/04/4-2.jpg', id: '02'},
      {title: 'Beach', src: 'https://bipbap.ru/wp-content/uploads/2017/04/1364841736_53-19.jpg', id: '03'}
    ],
    show : false
  }

  newId = 10;

  showPopUp = () => {
    this.setState((state) => {
      return {
      show: !state.show
      }
    });
  };

  addCard = (title, src) => {
    const newCard = {
      title: title,
      src: src,
      id: this.newId++
    };

    this.setState(({ cardData }) => {
      const newData = [
        ...cardData, newCard
      ];

      return {
        cardData: newData,
      }
    });
  };

  deleteItem = (id) => {
    this.setState(({ cardData }) => {
      const idArr = cardData.findIndex((elem) => elem.id === id);

      const newData = [
        ...cardData.slice(0, idArr),
        ...cardData.slice(idArr + 1)
      ];

      return {
        cardData: newData,
      };
    });
  };

  render() {
    const elements = this.state.cardData.map((item) => {
      return (
          <ImageCard title={item.title} src={item.src} id={item.id} key={item.id} delete={this.deleteItem}/>
      );
  });

    return (
      <>
        <HeaderPage />
        <button className="button button--new" onClick= {this.showPopUp} >new</button>
        { elements }
        { this.state.show ? <PopUp show={this.showPopUp} add={this.addCard}/> : null }
      </>
    )
  };
}
