import React, { Component } from 'react';


export default class PopUp extends Component {


  render() {

    return (
      <div className="popup-wrapper">
        <section className="popup">
          <h2 className="popup__title">New Image</h2>
          <input className="popup__input popup__input--title" type="text" placeholder="Title" />
          <input className="popup__input popup__input--url" type="text" placeholder="URL" />
          <div className="button-wrapper">
            <button className="button button--close">close</button>
            <button className="button button--add">add</button>
          </div>
        </section>
      </div>
    );
  }
};
