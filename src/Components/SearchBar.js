import React from 'react';

export default (props) => {
  const handleInput = (ev) => {
    props.handleUserInput(ev.target.value);
  };

  const handleCheckBox = (ev) => {
    props.handleCheckBox(ev.target.checked);
  };

  return (
    <div>
      <h3>Search</h3>
      <input type="text" value={props.searchBarInput} onChange={handleInput} />
      <br />
      <input type="checkbox" name="in-stock" onChange={handleCheckBox} />
      <label htmlFor="in-stock">Only show on stock</label>
    </div>
  );
};
