const { object, string } = require("yup");

exports.signupSchema = object({
  body: object({
    name: string().required("Please enter your name"),
    email: string()
      .required("Email is required for login")
      .email("Please enter a valid email"),
    password: string()
      .required("Password is required for sign up")
      .min(6, "Minimum password length is 6 chars"),
  }),
});

exports.loginSchema = object({
  body: object({
    password: string().required("Password is required for login"),
    email: string()
      .required("Email is required for login")
      .email("Please enter a valid email"),
  }),
});
