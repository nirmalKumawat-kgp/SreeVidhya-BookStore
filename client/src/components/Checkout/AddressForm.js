import {
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Box,
  Button,
  Alert,
} from "@mui/material";
import React, { useState } from "react";

export default function AddressForm({ handleNext }) {
  const [name, setName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [landmark, setLandmark] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  let address = {
    Name: name,
    AddressLine1: addressLine1,
    AddressLine2: addressLine2,
    PhoneNumber: phoneNumber,
    City: city,
    Landmark: landmark,
    State: state,
    Pincode: pincode,
  };
  // if (localStorage.getItem("address")) {
  //   address = JSON.parse(localStorage.getItem("address"));
  //   setName(address.Name);
  //   setPhoneNumber(address.PhoneNumber);
  //   setAddressLine1(address.AddressLine1);
  //   setAddressLine2(address.AddressLine2);
  //   setCity(address.City);
  //   setLandmark(address.Landmark);
  //   setState(address.State);
  //   setPincode(address.Pincode);
  // }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom style={{ fontSize: "1.75rem" }}>
        Shipping address
      </Typography>
      {error && (
        <Alert severity="warning" style={{ fontSize: "1.5rem" }}>
          {error}
        </Alert>
      )}
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              fullWidth
              value={name}
              autoComplete="given-name"
              variant="standard"
              InputProps={{ style: { fontSize: "2rem" } }}
              InputLabelProps={{ style: { fontSize: "1.75rem" } }}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="phonenumber"
              name="phonenumber"
              label="PhoneNumber"
              fullWidth
              autoComplete="Phone Number"
              variant="standard"
              InputProps={{ style: { fontSize: "2rem" } }}
              InputLabelProps={{ style: { fontSize: "1.75rem" } }}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
              InputProps={{ style: { fontSize: "2rem" } }}
              InputLabelProps={{ style: { fontSize: "1.75rem" } }}
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
              InputProps={{ style: { fontSize: "2rem" } }}
              InputLabelProps={{ style: { fontSize: "1.75rem" } }}
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="landmark"
              name="landmark"
              label="landmark"
              fullWidth
              autoComplete="landmark"
              variant="standard"
              InputProps={{ style: { fontSize: "2rem" } }}
              InputLabelProps={{ style: { fontSize: "1.75rem" } }}
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
              InputProps={{ style: { fontSize: "2rem" } }}
              InputLabelProps={{ style: { fontSize: "1.75rem" } }}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="state"
              name="state"
              label="State"
              fullWidth
              variant="standard"
              InputProps={{ style: { fontSize: "2rem" } }}
              InputLabelProps={{ style: { fontSize: "1.75rem" } }}
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
              InputProps={{ style: { fontSize: "2rem" } }}
              InputLabelProps={{ style: { fontSize: "1.75rem" } }}
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveAddress" value="yes" />
              }
              label="Use this address for payment details"
            />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            onClick={() => {
              if (
                !name ||
                !addressLine1 ||
                !state ||
                !city ||
                !pincode ||
                !phoneNumber ||
                !landmark
              ) {
                setError("Please Fill All The Required Details");
              } else {
                handleNext(address);
              }
            }}
            sx={{ mt: 3, ml: 1 }}
          >
            Next
          </Button>
        </Box>
      </form>
    </React.Fragment>
  );
}
