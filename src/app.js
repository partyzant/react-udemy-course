class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }
  handleDeleteOptions(){
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handlePick(){
    const randIndex = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randIndex];
  }
  handleAddOption(option){
    if(!option) {
      return 'Enter valid option';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option exists';
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }
  render(){
    const title = 'Indecision';
    const subtitle = 'Jakiś kurwa subtytuł zjebany';

    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
    }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
          >
            What should I do?
          </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map((option, i) => <Option key={i} option={option}/>)
        }
      </div>
    );
  }
}

class Option extends React.Component{
  render(){
    return(
      <div>
        {this.props.option}
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: false
    };
  }
  handleAddOption(e){
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
        {this.state.error && <p style={{color:'red'}}>{this.state.error}</p>}
        <form action="" onSubmit={this.handleAddOption.bind(this)}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
