import React, { useState } from "react";

function validateForm(formValues) {
  let errors = {};

  if (!formValues.name) {
    errors.name = "Name is required";
  }

  if (!formValues.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
    errors.email = "Email is invalid";
  }

  if (!formValues.password) {
    errors.password = "Password is required";
  } else if (formValues.password.length < 6) {
    errors.password = "Password must be at least 6 characters long";
  }

  if (!formValues.confirmPassword) {
    errors.confirmPassword = "Confirm password is required";
  } else if (formValues.password !== formValues.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
}

function SignupForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [formErrors, setFormErrors] = useState({});

  function handleChange(e) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errors = validateForm(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Submit form data
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
        {formErrors.name && <div className="error">{formErrors.name}</div>}
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        {formErrors.email && <div className="error">{formErrors.email}</div>}
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
        {formErrors.password && (
          <div className="error">{formErrors.password}</div>
        )}
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          name="confirmPassword"
          value={formValues.confirmPassword}
          onChange={handleChange}
        />
        {formErrors.confirmPassword && (
          <div className="error">{formErrors.confirmPassword}</div>
        )}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignupForm;