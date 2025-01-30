import { register } from "../../utils/network-data";
import { useNavigate } from "react-router-dom";
import RegisterInput from "../../components/Layouts/RegisterLayout";
import ThemeToggleButton from "../../components/Elements/Toggle/ThemeToggle";
import LocaleToggleButton from "../../components/Elements/Toggle/LocaleToggle";
import { useLocale } from "../../hooks/useLocale";

function RegisterPage() {
  const navigate = useNavigate();
  const { locale } = useLocale();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/login");
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
              {locale === "id" ? "Buat Akun" : "Create an account"}
            </h1>
            <div className="flex space-x-4">
              <ThemeToggleButton />
              <LocaleToggleButton />
            </div>
          </div>

          <RegisterInput register={onRegisterHandler} />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
