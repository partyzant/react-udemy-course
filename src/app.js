class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.deleteSingleOption = this.deleteSingleOption.bind(this);
    this.state = {
      options: props.options
    };
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handlePick() {
    const randIndex = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randIndex];
    alert(option);
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid option';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option exists';
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }
  deleteSingleOption(x) {
    this.setState((prevState) => {
      let tmp = prevState.options;
      return {
        options: tmp.filter((_, i) => i !== x)
      };
    });
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'zainstalować na chromie "react dev tools"';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          deleteSingleOption={this.deleteSingleOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'default title'
};

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
          </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
        props.options.map((option, i) => (
          <Option
            key={i}
            option={option}
            deleteSingleOption={props.deleteSingleOption}
            id={i}
          />
        ))
      }
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.option}
      <button onClick={props.deleteSingleOption.bind(this, props.id)}>Usuń</button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    e.target.elements.option.value = '';

    // if(error){
    this.setState(() => {
      return {
        error //to samo co 'error: error' taki skrót można stosować w ES6 gdy nazwa właściwości jest taka sama jak przypisywanej zmiennej
      };
    });
    // }
  }

  render() {
    return (
      <div>
        {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
        <form action="" onSubmit={this.handleAddOption.bind(this)}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
