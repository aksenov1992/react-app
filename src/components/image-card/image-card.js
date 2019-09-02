import React, { Component } from 'react';

import './image-card.css';

export default class ImageCard extends Component {

  state = {
    showButton: window.innerWidth > 750
  }

  onImageClick = () => {
    this.setState({
      showButton: true
    });
  };

  toggleButton = () => {
    if (window.innerWidth < 750) {
      this.setState({
        showButton: false
      })
    } else {
      this.onImageClick()
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this.toggleButton)
  };

  render() {

    return (

      <section className="image-card">
        <div className="image-card__header">
          <h2 className="image-card__title">{this.props.title}</h2>
          {this.state.showButton ? <button className= "button button--delete" id={this.props.id} onClick={() => this.props.delete(this.props.id)}>Delete</button> : null}
        </div>
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
