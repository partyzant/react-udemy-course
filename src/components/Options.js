import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        onClick={props.handleDeleteOptions}
        className="button button--link"
      >
        Remove All
    </button>
    </div>

    {props.options.length === 0 && <p className="widget__message">Add some options</p>}
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
