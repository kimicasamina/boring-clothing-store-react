import { commerce } from "../../lib/commerce";

export const generateToken = async (cartId) => {
  const token = await commerce.checkout.generateToken(cartId, {
    type: "cart",
  });

  return token;
};

export const fetchShippingCountries = async (checkoutTokenId) => {
  const { countries } = await commerce.services.localeListShippingCountries(
    checkoutTokenId
  );
  console.log("Shipping countries: ", countries);
  return countries;
  //   setShippingCountry(Object.keys(countries)[0]);
  //   setShippingCountries(countries);
};

const fetchShippingSubdivisions = async (countryCode) => {
  const { subdivisions } = await commerce.services.localeListSubdivisions(
    countryCode
  );
  console.log("LIST OF SHIPPING SUBDIVISIONS", subdivisions);
  return subdivisions;
  //   setShippingSubdivision(Object.keys(subdivisions)[0]);
  //   setShippingSubdivisions(subdivisions);
};

const fetchShippingOptions = async (
  checkoutTokenId,
  country,
  region = null
) => {
  const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {
    country,
    region,
  });
  console.log("LIST OF SHIPPING OPTIONS:", options);
  return options;
  //   setShippingOptions(options);
  //   setShippingOption(Object.keys(options)[0]);
};
