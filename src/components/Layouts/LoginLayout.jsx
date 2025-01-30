import PropTypes from "prop-types";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { useLocale } from "../../hooks/useLocale";
import useInput from "../../hooks/useInput";

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const { locale } = useLocale();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (typeof login === "function") {
      login({ email, password });
    } else {
      console.error("login is not a function");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="space-y-4 md:space-y-6">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {locale === "id" ? "Email" : "Email"}
        </label>
        <input
          id="email"
          type="email"
          placeholder={locale === "id" ? "Email" : "Email"}
          value={email}
          onChange={onEmailChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required=""
        ></input>
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {locale === "id" ? "Kata Sandi" : "Password"}
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required=""
        ></input>
      </div>

      <Button classname="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm sm:text-base px-4 sm:px-5 py-2.5 sm:py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {locale === "id" ? "Masuk" : "Sign In"}
      </Button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        {locale === "id" ? "Belum punya akun?" : `Don't have an account yet?`}{" "}
        <span className="text-blue-600 underline">
          <Link to="/register">{locale === "id" ? "Daftar" : "Sign up"}</Link>
        </span>
      </p>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
