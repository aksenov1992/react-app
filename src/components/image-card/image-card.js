import React, { Component } from 'react';

import './image-card.css';

export default class ImageCard extends Component {

  state = {
    showButton: false
  }

  onImageClick = () => {
    this.setState({
      showButton: true
    });
  };

  componentDidMount() {
    this.setWindowsize();
  };
  setWindowsize = () => {
    if (window.innerWidth > 750){
      this.onImageClick();
    }
  };

  render() {

    return (

      <section className="image-card">
        <h2 className="image-card__title">{this.props.title}</h2>
        {this.state.showButton ? <button className= "button button--delete" id={this.props.id} onClick={() => this.props.delete(this.props.id)}>Delete</button> : null}
        <img
          className="image-card__pic"
          alt={this.props.title}
          src={this.props.src}
          onClick={ this.onImageClick }
        />
      </section>
    );
  }
};