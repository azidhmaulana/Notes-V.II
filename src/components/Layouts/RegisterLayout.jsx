import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { useLocale } from "../../hooks/useLocale";
import useInput from "../../hooks/useInput";

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [succes, setSucces] = useState("");
  const { locale } = useLocale();

  const onPasswordChange = (event) => {
    setPassword(event.target.value);

    if (confirmPassword && event.target.value !== confirmPassword) {
      setSucces("");
      setError(
        locale === "id" ? "Kata sandi tidak cocok" : "Passwords do not match"
      );
    } else {
      setError("");
      if (event.target.value && confirmPassword) {
        setSucces(locale === "id" ? "Kata sandi cocok" : "Passwords match");
      }
    }
  };

  const onConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);

    if (password && event.target.value !== password) {
      setSucces("");
      setError(
        locale === "id" ? "Kata sandi tidak cocok" : "Passwords do not match"
      );
    } else {
      setError("");
      if (password && event.target.value) {
        setSucces(locale === "id" ? "Kata sandi cocok" : "Passwords match");
      }
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    register({ name, email, password });
  };

  const isSubmitDisabled = !password || !confirmPassword || error;

  return (
    <form onSubmit={onSubmitHandler} className="space-y-4 md:space-y-6">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {locale === "id" ? "Nama" : "Name"}
        </label>
        <input
          type="text"
          placeholder={locale === "id" ? "Nama" : "Name"}
          value={name}
          onChange={onNameChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required=""
        ></input>
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {locale === "id" ? "Email" : "Email"}
        </label>
        <input
          placeholder={locale === "id" ? "Email" : "Email"}
          value={email}
          onChange={onEmailChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required=""
        ></input>
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {locale === "id" ? "Kata Sandi" : "Password"}
        </label>
        <input
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={onPasswordChange}
          name="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required=""
        ></input>
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {locale === "id" ? "Konfirmasi Kata Sandi" : "Confirm Password"}
        </label>
        <input
          type="password"
          autoComplete="current-confirm-password"
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
          name="confirm_password"
          id="confirm_password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required=""
        ></input>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {succes && <p style={{ color: "green" }}>{succes}</p>}

      <Button
        isSubmitDisabled={isSubmitDisabled}
        classname="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm sm:text-base px-4 sm:px-5 py-2.5 sm:py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {locale === "id" ? "Buat Akun" : "Create an account"}
      </Button>

      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        {locale === "id" ? "Sudah punya akun?" : "Already have an account?"}
        <span className="text-blue-600 underline">
          <Link to="/"> {locale === "id" ? "Masuk" : "Login"}</Link>
        </span>
      </p>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
