import * as yup from "yup";

export const shippingAddressSchema = yup.object().shape({
  address: yup.string().required("Required"),
  city: yup.string().required("Required"),
  zipCode: yup.string().required("Required"),
  //   shippingCountry: yup.string().required("Required"),
  //   shippingSubdivision: yup.string().required("Required"),
  //   shippingOption: yup.string().required("Required"),
});
