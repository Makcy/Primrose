import React from 'react';

const Input = ({onChange, onSubmit}) => {
  return (
    <form>
    <div
      className="form-group">
      <label
        htmlFor="listInput">

      </label>
      <input
        type="text"
        onChange={onChange}
        className="form-control"
        id="listItemInput"
        placeholder="Add new todo"
      />
      <button
        className="btn btn-primary"
        onClick={onSubmit}
      >
        Add Item
     </button>
    </div>
  </form>
  )
}

export default Input;