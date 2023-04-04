import React from 'react';

function BookCard(props) {
  return (
    <div className="book-card">
      <img src={props.image} alt="Book Cover" />
      <h2>{props.title}</h2>
      <p>Author: {props.author}</p>
      <p>Description: {props.description}</p>
      <p>Price: ${props.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default BookCard;
