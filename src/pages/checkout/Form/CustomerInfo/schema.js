import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const userInfoSchema = yup.object().shape({
  firstName: yup.string().required("Firstname is required."),
  lastName: yup.string().required("Lastname is required."),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required."),
});
