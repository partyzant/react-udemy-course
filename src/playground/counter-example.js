class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      count: 0,
      name: props.name
    };
  }
  componentDidMount() {
    try {
      const count = parseInt(localStorage.getItem('count'), 10);
      
      if (!isNaN(count))
        this.setState(() => ({ count }));//same as { options: options }
    } catch (e) {
      //Do nothing
    }
  }
  componentDidUpdate(pp, ps) {
    if (ps.count != this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }
  addOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  minusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  reset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        {this.state.name}
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter count={10} />, document.getElementById('app'));

// let count = 0;
//
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
//
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
//
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };
//
//
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
//
//   ReactDOM.render(templateTwo, appRoot);
// };
//
// renderCounterApp();
