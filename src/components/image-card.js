import React, { Component } from 'react';

export default class ImageCard extends Component {

  state = {
    show: false
  }

  onImageClick = () => {
    this.setState({
      show: true
    });
  };


  render() {

    const cards = this.props.cards.cardData;

    const { show } = this.state;
    let classNames = 'button button--delete';

    if (show) {
      classNames += ' show-button';
    }

    let element = cards.map((item) => {
      const { title, src, id } = item;
      return (
        <section className="image-card" key={id}>
          <h2 className="image-card__title">{title}</h2>
          <button className= { classNames }>Delete</button>
          <img
            className="image-card__pic"
            alt={title}
            src={src}
            onClick={ this.onImageClick }
            />
        </section>
      )
    });

    return (
      <>
      { element }
      </>
    );
  }
};
