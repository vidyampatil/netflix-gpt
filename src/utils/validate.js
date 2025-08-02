export const checkValidate = (name, email, password) => {
  const errors = {};

  if (!email?.includes("@")) {
    errors.email = "Email is invalid";
  }

  if (!password || password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  // ✅ Only validate name if it's not null/undefined
  if (typeof name === "string" && name.trim() === "") {
    errors.name = "Name is required";
  }

  return Object.keys(errors).length > 0 ? errors : null;
};


