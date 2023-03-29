import React from "react";
import BookList from "../components/BookList";
import CategoryMenu from "../components/CategoryMenu";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <BookList />
    </div>
  );
};

export default Home;