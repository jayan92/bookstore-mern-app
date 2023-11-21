import React from "react";
import BookSingleCard from "./BookSingleCard";

const BooksCard = ({ books }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {books.map((book) => (
      <BookSingleCard key={book._id} book={book} />
    ))}
  </div>
);

export default BooksCard;
