import React, { useState } from "react";
import CustomerInfo from "./CustomerInfo";
import ShippingAddress from "./ShippingAddress";
import Payment from "./Payment";
import Confirmation from "../Confirmation";

export default function CheckoutForm({ currentStep, checkoutToken, nextStep }) {
  if (currentStep === 1) {
    return (
      <CustomerInfo
        nextStep={nextStep}
        // prevStep={prevStep}
        // setShippingData={setShippingData}
      />
    );
  }
  if (currentStep === 2) {
    return <ShippingAddress checkoutToken={checkoutToken} />;
  }
  if (currentStep === 3) {
    return <Payment />;
  }
  if (currentStep === 4) {
    return <Confirmation />;
  }
}
