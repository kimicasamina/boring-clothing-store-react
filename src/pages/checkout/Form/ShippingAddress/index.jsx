import React, { useContext, useState, useEffect } from "react";
import { shippingAddressSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../../../../context/globalProvider";
import { fetchShippingCountries } from "../../../../services/checkout/checkoutapi";

export default function ShippingAddress({ handleNext }) {
  const { setCheckoutDetails, checkoutDetails } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    zipCode: "",
    shippingCountry: "",
    shippingSubdivision: "",
    shippingOption: "",
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(shippingAddressSchema),
  });

  const onSubmit = (data) => {
    console.log("DATA: ", data);
    setFormData(data);
    setCheckoutDetails((prev) => (prev = { ...prev, ...data }));
    handleNext();
  };
  console.log("CHECKOUT DETAILS: ", checkoutDetails);

  useEffect(() => {
    const fetchData = async () => {
      const countries = await fetchShippingCountries();
      console.log("COUNTRIES: ", countries);
    };

    fetchData();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
      <div className="form-controller flex-1 flex flex-col gap-x-2">
        <label htmlFor="" className="font-semibold">
          Address
        </label>
        <input
          className="border rounded-md p-2"
          type="text"
          {...register("address")}
        />
        {errors.address && (
          <p className="text-alert font-base">{errors.address?.message}</p>
        )}
      </div>

      <div className="form-controller  flex-1 flex flex-col gap-x-2">
        <label htmlFor="" className="font-semibold">
          City
        </label>
        <input
          className="border rounded-md p-2"
          type="text"
          {...register("city")}
        />
        {errors.city && (
          <p className="text-alert font-base">{errors.city?.message}</p>
        )}
      </div>

      <div className="form-controller  flex-1 flex flex-col gap-x-2">
        <label htmlFor="" className="font-semibold">
          Zip / Postal Code
        </label>
        <input
          className="border rounded-md p-2"
          type="text"
          {...register("zipCode")}
        />
        {errors.zipCode && (
          <p className="text-alert font-base">{errors.zipCode?.message}</p>
        )}
      </div>

      <div className="form-controller flex-1 flex flex-col gap-x-2">
        <label htmlFor="" className="font-semibold">
          Shipping Country
        </label>
        <select name="shippingCountry">
          {}
          <option value=""></option>
        </select>

        {/* <Select
          defaultValue={shippingCountry}
          // value={shippingCountry}
          // onChange={(option) => {
          //   console.log("OPTION:", option);
          //   const onSelect = (option) => {
          //     setShippingCountry(option.value);
          //   };
          //   onSelect();
          // }}
          onChange={(val) => setShippingCountry(val)}
          options={listOfCountry}
          {...register("shippingCountry")}
        />
        {errors.shippingCountry && (
          <p className="text-alert font-base">
            {errors.shippingCountry?.message}
          </p>
        )} */}
      </div>

      {/* <div className="form-controller flex-1 flex flex-col gap-x-2">
        <label htmlFor="" className="font-semibold">
          Shipping Subdivision
        </label>
        <Select
          defaultValue={shippingSubdivision}
          // value={shippingSubdivision}
          onChange={() => {
            const onSelect = (option) => {
              setShippingSubdivision(option.value);
            };
            onSelect();
          }}
          options={listOfSubdivision}
          {...register("shippingSubdivision")}
        />
        {errors.shippingSubdivision && (
          <p className="text-alert font-base">
            {errors.shippingSubdivision?.message}
          </p>
        )}
      </div>

      <div className="form-controller flex-1 flex flex-col gap-x-2">
        <label htmlFor="" className="font-semibold">
          Shipping Options
        </label>
        <Select
          defaultValue={shippingOption}
          // value={shippingOption}
          onChange={() => {
            const onSelect = (option) => {
              setShippingOption(option.value);
            };
            onSelect();
          }}
          options={listOfOptions}
          {...register("shippingOption")}
        />
        {errors.shippingOption && (
          <p className="text-alert font-base">
            {errors.shippingOption?.message}
          </p>
        )}
      </div> */}
      <button type="submit">Next</button>
    </form>
  );
}
