import React from 'react';
import ReactDOM from 'react-dom';

import HeaderPage from './components/header-page';
import ImageCard from './components/image-card';
import PopUp from './components/pop-up';


const Page = () => {

  const cardData = [
    {title: 'Sky', src: 'https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg', id: '01'},
    {title: 'Rock', src: 'https://bipbap.ru/wp-content/uploads/2017/04/4-2.jpg', id: '02'},
    {title: 'Beach', src: 'https://bipbap.ru/wp-content/uploads/2017/04/1364841736_53-19.jpg', id: '03'}
  ];

  return (
    <>
      <HeaderPage />
      <button className="button button--new">new</button>
      <ImageCard cards={cardData}/>
      <PopUp />
    </>
  );
};

ReactDOM.render(<Page />, document.querySelector('#root'));
