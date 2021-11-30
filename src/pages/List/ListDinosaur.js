import React from 'react';
import { Link } from 'react-router-dom';
import ItemsList from '../../components/ItemsList/ItemsList';
import './ListDinosaur.scss';

function ListDinosaur() {
  return (
    <div className="listDinosaur">
      <div className="classificationWrapper">
        <ul className="classification">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            {'>'}
            {'>'}
          </li>
          <li>DINOSAUR</li>
        </ul>
      </div>
      <ItemsList />
      <ItemsList />
      <ItemsList />
      <ItemsList />;
    </div>
  );
}

export default ListDinosaur;
