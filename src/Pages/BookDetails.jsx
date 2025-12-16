import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./css/BookDetails.css";
function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`https://openlibrary.org/works/${id}.json`).then((response) => {
      setBook(response.data);
    });
  }, [id]);
  if (!book) {
    return <p>Loading...</p>;
  }
  return (
    <div id="bookDetailsContainer">
      <h2>{book.title}</h2>
      <p>{typeof book.description === "string"
          ? book.description
          : book.description?.value || "No description available"}</p>
      <img id="bookCover"
        src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
      />
    </div>
  );
}

export default BookDetails;
