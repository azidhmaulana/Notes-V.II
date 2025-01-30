import PropTypes from "prop-types";
import { login } from "../../utils/network-data";
import LoginInput from "../../components/Layouts/LoginLayout";
import ThemeToggleButton from "../../components/Elements/Toggle/ThemeToggle";
import LocaleToggleButton from "../../components/Elements/Toggle/LocaleToggle";
import { useLocale } from "../../hooks/useLocale";

function LoginPage({ loginSuccess }) {
  const { locale } = useLocale();

  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        Notes
      </div>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {locale === "id"
                ? "Masuk ke akun Anda"
                : "Sign in to your account"}
            </h1>
            <div className="flex space-x-4">
              <ThemeToggleButton />
              <LocaleToggleButton />
            </div>
          </div>
          <LoginInput login={onLogin} />
        </div>
      </div>
    </div>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
