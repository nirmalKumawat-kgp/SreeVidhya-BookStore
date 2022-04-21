import React, { useState, useEffect } from "react";
import { QuantityPicker } from "react-qty-picker";
import API from "../../baseUrl";
import "./CartItem.css";
export default function CartItem({ id }) {
  const imgSrc = "https://sreevidhyaa.herokuapp.com/";
  const [quantity, setQuantity] = useState(1);
  const [book, setBook] = useState({});
  useEffect(() => {
    API.get("books/" + id).then((response) => {
      setBook(response.data.data);
    });
  }, []);
  return (
    <div className="cartItem">
      {book && (
        <>
          <div className="itemImage">
            <img src={imgSrc + book.bookImage} alt="item" />
          </div>
          <div className="itemInfo">
            <div className="itemDescription">
              {" "}
              <div className="itemName">{book.name}</div>
              <div className="itemPrice">{book.discountPrice}</div>
            </div>

            <div>
              {" "}
              <QuantityPicker
                min={1}
                value={quantity}
                max={book.quantity}
                onChange={(value) => {}}
              />
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
}
