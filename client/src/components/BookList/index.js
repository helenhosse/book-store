import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import BookItem from '../BookItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_BOOKS } from '../../utils/actions';
import { QUERY_BOOKS } from '../../utils/queries';
// import spinner from '../../assets/spinner.gif';

function BookList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_BOOKS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_BOOKS,
        books: data.books,
      });
    }
  }, [data, dispatch]);

  function filterBooks() {
    if (!currentCategory) {
      return state.books;
    }

    return state.books.filter(
      (book) => book.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h2>Book List:</h2>
      {state.books.length ? (
        <div className="flex-row">
          {filterBooks().map((book) => (
            <BookItem
            key={book._id}
            _id={book._id}
            image={book.image}
            name={book.name}
            price={book.price}
            quantity={book.quantity}
          />
          ))}
        </div>
      ) : (
        <h3>You don't have any books saved yet!</h3>
      )}
      {/* {loading ? <img src={spinner} alt="loading" /> : null} */}
    </div>
  );
}

export default BookList;