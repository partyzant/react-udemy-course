import React from 'react';

const Option = (props) => (
  <div>
    {props.option}
    <button
      className="button button--link"
      onClick={props.deleteSingleOption.bind(this, props.id)}
    >
      Usuń
      </button>
  </div>
);

export default Option;
