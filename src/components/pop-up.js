import React, { Component } from 'react';


export default class PopUp extends Component {

  state = {
    title: '',
    url: ''
  };

  onTitleChange = (evt) => {
    this.setState({
      title: evt.target.value
    });
  };

  onUrlChange = (evt) => {
    this.setState({
      url: evt.target.value
    });
  };

  onSubmitForm = (evt) => {
    evt.preventDefault();
    this.props.add(this.state.title, this.state.url);
    this.props.show();
  };


  render() {

    return (
      <div className="popup-wrapper">
        <form className="popup" onSubmit = {this.onSubmitForm}>
          <h2 className="popup__title">New Image</h2>
          <input className="popup__input popup__input--title" type="text" placeholder="Title" onChange = {this.onTitleChange} />
          <input className="popup__input popup__input--url" type="text" placeholder="URL" onChange = {this.onUrlChange} />
          <div className="button-wrapper">
            <button className="button button--close" type="button" onClick = {this.props.show}>close</button>
            <button className="button button--add" type="submit" >add</button>
          </div>
        </form>
      </div>
    );
  }
};
