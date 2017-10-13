import React from 'react';

const Option = (props) => (
  <div className="option">
    <p className="option__text">{props.id + 1}. {props.option}</p>

    <button
      className="button button--link"
      onClick={props.deleteSingleOption.bind(this, props.id)}
    >
      Usuń
      </button>
  </div>
);

export default Option;
