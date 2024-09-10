import React, { useContext, useState } from "react";
import { userInfoSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../../../../context/globalProvider";

export default function CustomerInfo({ handleNext }) {
  const { setCheckoutDetails, checkoutDetails } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(userInfoSchema),
  });

  const onSubmit = (data) => {
    console.log("DATA: ", data);
    setFormData(data);
    setCheckoutDetails((prev) => (prev = { ...prev, ...data }));
    () => handleNext();
  };

  // console.log("GLOBAL", checkoutDetails);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
      <div>Provide your contact details.</div>
      <div className="form-controller flex-1 flex flex-col gap-x-2">
        <label htmlFor="" className="font-semibold">
          Firstname
        </label>
        <input
          {...register("firstName")}
          className="p-2 border rounded-sm outline-none"
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>

      <div className="form-controller flex-1 flex flex-col gap-x-2">
        <label htmlFor="" className="font-semibold">
          Lastname
        </label>
        <input
          {...register("lastName")}
          className="p-2 border rounded-sm outline-none"
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>

      <div className="form-controller flex-1 flex flex-col gap-x-2">
        <label htmlFor="" className="font-semibold">
          Email
        </label>
        <input
          {...register("email")}
          className="p-2 border rounded-sm outline-none"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <button type="submit">NEXT</button>
    </form>
  );
}
