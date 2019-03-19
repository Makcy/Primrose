import React from 'react';

const List = (props) => {
  const list = props.listItems.map((el, i) => {
    return <li key={i}>
    <span
      style={
        el.done
        ? {textDecoration: 'line-through', fontSize: '20px'}
        : {textDecoration: 'none', fontSize: '20px'}
      }
      onClick={() => props.onClick(i)}
    >{el.item}</span>
    <button
      className="btn btn-danger pull-right"
      onClick={() => props.onDeleteClick(i)}
    >
      x
    </button>
    </li>
  });
  return (
    <ul>
      {
        list
      }
    </ul>
  )
};

export default List;