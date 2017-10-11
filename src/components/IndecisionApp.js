import React from 'react';
import Header from './Header';
import AddOption from './AddOption';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }
  handleCloseModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }
  handlePick = () => {
    const randIndex = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randIndex];

    this.setState(() => ({ selectedOption: option }));
  }
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid option';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option exists';
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }
  deleteSingleOption = (x) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((_, i) => i !== x)
    }));
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options)
        this.setState(() => ({ options }));//same as { options: options }
    } catch (e) {
      //Do nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);

      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('comp will unmount ');
  }

  render() {
    const subtitle = 'zainstalować na chromie "react dev tools"';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              deleteSingleOption={this.deleteSingleOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}
