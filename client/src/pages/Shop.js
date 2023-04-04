import React from "react";
import BookCard from "./BookCard";

function Shop(props) 
  // {const HomePage = () => {
  //   return (
  //     <div> 
  //     </div>
  //   );
  // };

{const books = [
    {
      id: 1,
      title: "Book Title",
      author: "Book Author",
      description: "Book Description",
      price: 19.99,
      image: "book-cover.jpg",
    },
    // more book objects here
  ];

  return (
    <div className="search-results">
      <h1>Search Results</h1>
      <div className="book-list">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            description={book.description}
            price={book.price}
            image={book.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
