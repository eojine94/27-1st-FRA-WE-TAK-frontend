import React from 'react';
import ItemsList from '../../components/ItemsList/ItemsList';
import './ListDinosaur.scss';

function ListDinosaur() {
  return (
    <div className="listDinosaur">
      <ul className="clssification">
        <li>HOME</li>
        <li>
          {'>'}
          {'>'}
        </li>
        <li>Dinosaur</li>
      </ul>
      <ItemsList />
      <ItemsList />
      <ItemsList />
      <ItemsList />;
    </div>
  );
}

export default ListDinosaur;
