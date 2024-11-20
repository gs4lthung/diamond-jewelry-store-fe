import * as Yup from "yup";

const loginValidationShema = Yup.object().shape({
  user_name: Yup.string()
    .required("Username is required")
    .min(3, "Username must contain 3 characters")
    .max(20, "Username cannot exceed 20 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must not exceed 20 characters"),
});

export { loginValidationShema };
