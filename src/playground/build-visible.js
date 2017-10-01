class VisibilityToggle extends React.Component {
  constructor(props){
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      visible: false
    };
  }
  toggleVisibility(){
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      };
    });
  }
  render(){
    return (
      <div>
        <h1>Visibility toggle</h1>

        <button onClick={this.toggleVisibility}>
          {this.state.visible ? 'hide' : 'show'}
        </button>
        {this.state.visible && <p>I l u JS</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
