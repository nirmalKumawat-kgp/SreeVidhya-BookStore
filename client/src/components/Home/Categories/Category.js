import React, { useEffect, useState } from "react";
import API from "../../../baseUrl";
import CategoryItem from "./CategoryItem";
export default function Category() {
  const [books, setBooks] = useState(null);
  const [bookCategories, setBookCategories] = useState(null);
  useEffect(() => {
    API.get("books/getAllBooks").then((response) => {
      setBooks(response.data);
    });
    API.get("books/getAllBookCategory").then((response) => {
      setBookCategories(response.data);
    });
  }, []);

  return (
    <>
      {bookCategories &&
        books &&
        bookCategories.map((category, index) => {
          let categoryBooks = books.filter(
            (book) => book.BookCategoryId === category.id
          );
          return (
            <CategoryItem
              category={category}
              books={categoryBooks}
              key={index}
            />
          );
        })}
    </>
  );
}
