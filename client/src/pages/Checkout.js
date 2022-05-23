import React from "react";
import API from "../baseUrl";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Typography,
  Link,
  CssBaseline,
  AppBar,
  Toolbar,
  Container,
  Paper,
  Stepper,
  Step,
  Box,
  Button,
  StepLabel,
} from "@mui/material";
import AddressForm from "../components/Checkout/AddressForm";
import Review from "../components/Checkout/Review";
import { useNavigate } from "react-router-dom";
import WrapperComponent from "../components/WrapperComponent";
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Shipping address", "Review your order"];

const theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 15,
  },
});

export default function Checkout() {
  const token = localStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [orderId, setOrderId] = React.useState(null);
  const handleNext = (address) => {
    localStorage.setItem("address", JSON.stringify(address));

    setActiveStep(activeStep + 1);
  };
  const address = JSON.parse(localStorage.getItem("address"));
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm handleNext={handleNext} />;
      case 1:
        return (
          <Review
            handleBack={handleBack}
            handlePlaceOrder={handlePlaceOrder}
            address={address}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handlePlaceOrder = async () => {
    setLoading(true);
    const cartDetails = JSON.parse(localStorage.getItem("cartItems"));

    const { data } = await API.post(
      "order/addOrder",
      { address: address, cartDetails: cartDetails },
      config
    );
    if (data.success) {
      setLoading(false);
      setOrderId(data.data.id);
      setActiveStep(activeStep + 1);
    }
  };
  if (activeStep === steps.length) {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }
  return (
    <WrapperComponent>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          position="absolute"
          color="default"
          elevation={0}
          sx={{
            position: "relative",
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
          }}
        >
          <Toolbar>
            <Typography
              variant="h4"
              color="inherit"
              noWrap
              onClick={() => navigate("/")}
              style={{ pointer: "cursor" }}
            >
              SreeVidya{" "}
            </Typography>
          </Toolbar>
        </AppBar>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h1" variant="h3" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel className="stepLabel">{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is {orderId && orderId}. We have emailed
                    your order confirmation, and will send you an update when
                    your order has shipped.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>{getStepContent(activeStep)}</React.Fragment>
              )}
            </React.Fragment>
          </Paper>
          <Copyright />
        </Container>
      </ThemeProvider>
    </WrapperComponent>
  );
}
