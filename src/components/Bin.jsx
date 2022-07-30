import { useState } from 'react';

export const Bin = (props) => {
  const { 
    title,
    add,
    remove,
    listTo, 
    setListTo,
    listFrom,
    setListFrom 
  } = props;

  return (
    <div className="bin m-6 h-80">
      <p className="font-semibold underline">{ title }:</p>
      <ul className="mt-4">
        { listFrom && listFrom.map((item, idx) => (
          <li 
            key={ idx }
            onClick={ () => {
              add(listTo, setListTo, item);
              remove(listFrom, setListFrom, item); 
            } }>{ item }</li>
        )) }
      </ul>
    </div>
  );
}