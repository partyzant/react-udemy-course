import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: false
  };

  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    if (!error)
      e.target.elements.option.value = '';

    this.setState(() => {
      return {
        error //to samo co 'error: error' taki skrót można stosować w ES6 gdy nazwa właściwości jest taka sama jak przypisywanej zmiennej
      };
    });
  };

  render() {
    return (
      <div className="">
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
