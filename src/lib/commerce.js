// import Commerce from "@chec/commerce.js";
const pubKey = process.env.REACT_APP_CHEC_PUBLIC_KEY;
// export const commerce = new Commerce(
//   process.env.REACT_APP_CHEC_PUBLIC_KEY,
//   true
// );

import CommerceSDK from "@chec/commerce.js";
export const commerce = new CommerceSDK(pubKey, true);
