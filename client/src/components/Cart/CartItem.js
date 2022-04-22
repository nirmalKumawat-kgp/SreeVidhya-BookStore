import { Backdrop, Button, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import { QuantityPicker } from "react-qty-picker";
import API from "../../baseUrl";
import "./CartItem.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartState } from "../../CartContext";

export default function CartItem({
  id,
  handleItemQuantity,
  quantity: itemQuantity,
  handleDelete,
}) {
  let imgSrc;
  if (process.env.NODE_ENV === "production") {
    imgSrc = "https://sreevidhyaa.herokuapp.com/";
  } else {
    imgSrc = "http://localhost:3006/";
  }

  const [quantity, setQuantity] = useState(itemQuantity);

  const [book, setBook] = useState({});

  const handleQuantity = (value) => {
    setQuantity(value);

    handleItemQuantity(id, value).then((response) => console.log(response));
  };

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
              <div className="itemPrice">
                <span>₹{book.discountPrice} &nbsp;</span>
                <span>₹{book.originalPrice}</span>
              </div>
            </div>

            <div style={{ marginTop: "1rem" }}>
              {" "}
              <QuantityPicker
                min={1}
                value={quantity}
                max={book.quantity}
                onChange={handleQuantity}
              />
            </div>
            <div style={{ position: "absolute", right: 0, bottom: 0 }}>
              {" "}
              <IconButton
                aria-label="delete"
                size="large"
                onClick={() => handleDelete(book.id)}
              >
                <DeleteIcon style={{ fontSize: "2.5rem" }} />
              </IconButton>
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
}
