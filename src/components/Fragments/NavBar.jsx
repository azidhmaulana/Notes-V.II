import Title from "../Elements/Title";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FiLogOut } from "react-icons/fi";
import ThemeToggleButton from "../Elements/Toggle/ThemeToggle";
import LocaleToggleButton from "../Elements/Toggle/LocaleToggle";
import { useLocale } from "../../hooks/useLocale";

const NavBar = (props) => {
  const { title, logout, name } = props;
  const { locale } = useLocale();

  return (
    <>
      <Title classname="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
        {title}
      </Title>
      <div className="flex flex-row gap-4 font-bold text-2md">
        <Link
          to="/"
          className="text-gray-900 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400"
        >
          {locale === "id" ? "Beranda" : "Home"}
        </Link>
        <Link
          to="/archive"
          className="text-gray-900 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400"
        >
          {locale === "id" ? "Arsip" : "Archived"}
        </Link>
        <div className="text-gray-900 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400">
          ||
        </div>
        <Link
          to="addNotes"
          className="text-gray-900 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400"
        >
          {locale === "id" ? "Tambah Catatan" : "Add Note"}
        </Link>
      </div>
      <div className="flex flex-row gap-4 font-bold text-2md dark:text-gray-300 dark:hover:text-gray-400">
        <ThemeToggleButton />
        <LocaleToggleButton />

        <button onClick={logout} className="flex items-center gap-2">
          <span>{name}</span> <FiLogOut />
        </button>
      </div>
    </>
  );
};

NavBar.propTypes = {
  title: PropTypes.string,
  logout: PropTypes.func,
  name: PropTypes.string,
};

export default NavBar;
