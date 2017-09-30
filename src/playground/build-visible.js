let state = false;

const toggleState = () => {
  state = !state;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility toggle</h1>

      <button onClick={toggleState}>{state ? 'hide' : 'show'}</button>
      {state && <p>dupa cycki cipka</p>}
    </div>
  );

  ReactDOM.render(template, document.getElementById("app"));
};

render();
