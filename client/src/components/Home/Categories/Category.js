import { CircularProgress, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import API from "../../../baseUrl";
import CategoryItem from "./CategoryItem";
export default function Category() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState(null);
  const [bookCategories, setBookCategories] = useState(null);
  useEffect(() => {
    setLoading(true);
    API.get("books/getAllBooks").then((response) => {
      setBooks(response.data);
    });
    API.get("books/getAllBookCategory").then((response) => {
      setBookCategories(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center",height: "300px",alignItems:"center"}}>
          <CircularProgress color="success" />
        </Box>
      ) : (
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
      )}
    </>
  );
}
