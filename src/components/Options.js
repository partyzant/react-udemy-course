import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.length === 0 && <p>Add some options</p>}
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

export default Options;
