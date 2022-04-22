import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import API from "../../baseUrl";
import React, { useEffect, useState } from "react";
import "./Checkout.css";

export default function Review({ handleBack, handlePlaceOrder, address }) {
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const cartDetails = JSON.parse(localStorage.getItem("cartItems"));
  console.log(cartDetails);
  const token = localStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const fetchCartCost = async () => {
    const { data } = await API.get("cart/getCartCost", config);
    setSubTotal(data.data.subtotal);
    setDiscount(data.data.discount);
    setTotal(data.data.total);
  };
  useEffect(() => {
    fetchCartCost();
  }, []);

  const products = [
    {
      name: "SubTotal",
      desc: cartDetails.length + " Items",
      price: `₹  ${subTotal}`,
    },
    {
      name: "Discount",
      desc: "",
      price: `₹  ${discount}`,
    },

    { name: "Shipping", desc: "", price: "Free" },
  ];

  const addresses = [
    address.AddressLine1,
    address.AddressLine2,
    address.Landmark,
    address.Pincode,
    address.City,
    address.State,
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom style={{ fontSize: "2rem" }}>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name}>
            <ListItemText primary={product.name} />
            <Typography
              variant="body2"
              sx={{ fontSize: "1.75rem", color: "rgba(255,0,0,0.7)" }}
            >
              {product.price}
            </Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700, fontSize: "2rem" }}
          >
            ₹ {total}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ mt: 2, fontSize: "1.75rem", fontWeight: 600 }}
          >
            Shipping
          </Typography>
          <Typography gutterBottom sx={{ fontSize: "1.5rem" }}>
            {address.Name}&nbsp; {address.PhoneNumber}
          </Typography>
          <Typography gutterBottom sx={{ fontSize: "1.5rem" }}>
            {addresses.join(", ")}
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handlePlaceOrder}
          sx={{ mt: 3, ml: 1 }}
        >
          Place Order
        </Button>
      </Box>
    </React.Fragment>
  );
}
