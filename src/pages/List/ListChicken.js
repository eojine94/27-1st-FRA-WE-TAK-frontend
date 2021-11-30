import React from 'react';
import ItemsList from '../../components/ItemsList/ItemsList';
import './ListChicken.scss';

function ListChicken() {
  return (
    <div className="listChicken">
      <div className="classificationWrapper">
        <ul className="classification">
          <li>HOME</li>
          <li>
            {'>'}
            {'>'}
          </li>
          <li>CHICKEN</li>
        </ul>
      </div>
      <ItemsList />
      <ItemsList />
      <ItemsList />
      <ItemsList />
    </div>
  );
}

export default ListChicken;
