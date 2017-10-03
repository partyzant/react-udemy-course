class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.testFunc = this.testFunc.bind(this);
    this.state = {
      options: ['op 1']
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
    alert(option);
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
  testFunc(x){
    this.setState((prevState) => {
      let tmp = prevState.options;
      return {
        options: tmp.filter((_, i) => i !== x)
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
          testFunc={this.testFunc}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </div>
    );
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
          props.options.map((option, i) => <Option key={i} option={option} testFunc={props.testFunc} id={i}/>)
        }
      </div>
    );
};

const Option = (props) => {
    return(
      <div onClick={props.testFunc.bind(this, props.id)}>
        {props.option}
      </div>
    );
};

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
