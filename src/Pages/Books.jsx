import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./css/Books.css";
import { Link } from "react-router-dom";
function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("https://openlibrary.org/search.json?q=programming")
      .then((response) => {
        setBooks(response.data.docs);
      });
  }, []);

  return (
    <div id="booksContainer">
      {books.map((book) => {
        const id = book.key.split("/").pop();
        return (
          <div id="book" key={book.id}>
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={book.title}
            />
            <h2>
              Title:
              <Link id="title" to={`/BookDetails/${id}`}>{book.title}</Link>
            </h2>
            <p>Author(s): {book.author_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Books;
