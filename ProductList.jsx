import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList() {
  const dispatch = useDispatch();
  const plants = [
    { name: 'Snake Plant', cost: '$15', image: 'url1', category: 'Indoor' },
    { name: 'Aloe Vera', cost: '$10', image: 'url2', category: 'Medicinal' },
    { name: 'Peace Lily', cost: '$20', image: 'url3', category: 'Indoor' },
    { name: 'Lavender', cost: '$12', image: 'url4', category: 'Aromatic' },
    { name: 'Spider Plant', cost: '$18', image: 'url5', category: 'Indoor' },
    { name: 'Money Tree', cost: '$25', image: 'url6', category: 'Luck' }
  ];

  return (
    <div className="product-list">
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Plants</a>
          <a href="#">Cart (0)</a>
        </div>
      </nav>
      <div className="products-grid">
        {plants.map(plant => (
          <div key={plant.name} className="product-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>{plant.cost}</p>
            <button onClick={() => dispatch(addItem(plant))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
