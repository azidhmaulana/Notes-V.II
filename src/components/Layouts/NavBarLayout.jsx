import NavBar from "../Fragments/NavBar";
import PropTypes from "prop-types";

function NavBarLayout({ handleLogout, authedUser }) {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center dark:bg-gray-700 justify-between mx-auto p-4">
        <NavBar title="Notes" logout={handleLogout} name={authedUser} />
      </div>
    </nav>
  );
}

NavBarLayout.propTypes = {
  handleLogout: PropTypes.func,
  authedUser: PropTypes.string,
};

export default NavBarLayout;
