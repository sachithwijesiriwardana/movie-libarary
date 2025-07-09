import { reactive } from "vue";

export default function useFormValidation() {
  const form = reactive({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    message: "",
    terms: false,
  });

  const errors = reactive({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    terms: "",
  });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    let valid = true;

    errors.firstName =
      errors.lastName =
      errors.email =
      errors.message =
      errors.terms =
        "";

    if (!form.firstName) {
      errors.firstName = "First name is required";
      valid = false;
    }

    if (!form.lastName) {
      errors.lastName = "Last name is required";
      valid = false;
    }

    if (!form.email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!validateEmail(form.email)) {
      errors.email = "Invalid email adress format";
      valid = false;
    }

    if (!form.message) {
      errors.message = "Message is required";
      valid = false;
    }

    if (!form.terms) {
      errors.terms = "You must agree to the terms";
      valid = false;
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`
        First Name: ${form.firstName}
        Last Name: ${form.lastName}
        Email: ${form.email}
        Telephone: ${form.telephone}
        Message: ${form.message}
        Agreed to Terms: ${form.terms ? "Yes" : "No"}
      `);
      //here we can reset the form
      form.firstName = "";
      form.lastName = "";
      form.email = "";
      form.telephone = "";
      form.message = "";
      form.terms = false;
    }
  };

  return { form, errors, handleSubmit };
}
