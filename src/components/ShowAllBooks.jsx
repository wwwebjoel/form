import React, { useEffect, useState } from "react";
import DeleteIcon from "./general/DeleteIcon";
import "./ShowAllBooks.css";

const ShowAllBooks = () => {
  const [books, setAllBooks] = useState([]);
  useEffect(() => {
    myFunction();
  }, []);

  const deleteHandler = async (id) => {
    const response = await fetch(`http://localhost:3900/api/v1/books/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.json();
    myFunction();
  };

  const myFunction = () => {
    let getBooks = async () => {
      const res = await fetch("http://localhost:3900/api/v1/books");
      const data = await res.json();
      setAllBooks(data);
    };
    try {
      getBooks();
    } catch (e) {
      console.log(
        "Sorry there was an error connecting to server. Please try again."
      );
    }
  };

  return (
    <>
      {books && (
        <div className="cardsContainer">
          {books.map((book, index) => {
            return (
              <div key={index} className="card">
                <div className="cardTitle">{book.title}</div>
                <div className="cardAuthor">—{book.author}</div>
                <div className="cardLastRow">
                  <div className="cardPrice">Rs.{book.price}</div>
                  <div
                    className="delete"
                    onClick={() => deleteHandler(book._id)}
                  >
                    <DeleteIcon />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ShowAllBooks;
