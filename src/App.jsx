import { useState } from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "./routes";

function App() {
  // return (
  //   <div className="">
  //     <h1 className="">
  //       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, unde?
  //     </h1>
  //   </div>
  // );

  return <RouterProvider router={router} />;
}

export default App;
