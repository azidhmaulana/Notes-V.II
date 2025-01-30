import NavBarLayout from "./components/Layouts/NavBarLayout";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomeNotesPageWrapper from "./pages/HomeNotesPages";
import ArchiveNotesPageWrapper from "./pages/ArchivePage";
import AddNotesPage from "./pages/AddNotesPage";
import NotFoundPage from "./pages/NotFoundPage";
import NoteDetailPage from "./pages/DetailNotePage";
import { useEffect, useState } from "react";
import LoginPage from "./pages/AuthPages/LoginPages";
import {
  getAccessToken,
  getUserLogged,
  putAccessToken,
} from "./utils/network-data";
import RegisterPage from "./pages/AuthPages/RegisterPage";
import LoadingForm from "./components/Elements/Loading";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LocaleProvider } from "./contexts/LocaleContext";

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [hideNavbar, setHideNavbar] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    setAuthedUser(null);
    putAccessToken("");
  };

  useEffect(() => {
    const hiddenRoutes = ["/login", "/404", "/register"];

    setHideNavbar(hiddenRoutes.includes(location.pathname));
  }, [location.pathname]);

  useEffect(() => {
    async function fetchUser() {
      if (!getAccessToken()) return setInitializing(false);

      const { error, data } = await getUserLogged();

      if (!error) {
        setAuthedUser(data);
      } else {
        setAuthedUser(null);
      }
      setInitializing(false);
    }
    fetchUser();
  }, []);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  if (initializing) {
    return <LoadingForm />;
  }

  return (
    <LocaleProvider>
      <ThemeProvider>
        <div className="w-full min-h-screen dark:bg-gray-800 flex justify-center">
          <div className="w-full 2xl:container bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-6">
            {!hideNavbar && authedUser && (
              <header className="w-full bg-white dark:bg-gray-800 shadow-lg mb-4 fixed top-0 left-0 z-50">
                <NavBarLayout
                  handleLogout={handleLogout}
                  authedUser={authedUser.name}
                />
              </header>
            )}

            <main className="w-full dark:bg-gray-800 pt-16">
              <Routes>
                <Route
                  path="/login"
                  element={
                    authedUser ? (
                      <Navigate to="/" />
                    ) : (
                      <LoginPage loginSuccess={onLoginSuccess} />
                    )
                  }
                />

                <Route
                  path="/register"
                  element={
                    authedUser ? (
                      <Navigate to="/" />
                    ) : (
                      <RegisterPage setAuthedUser={setAuthedUser} />
                    )
                  }
                />

                <Route path="*" element={<Navigate to="/404" />} />
                <Route path="/404" element={<NotFoundPage />} />

                <Route
                  path="/"
                  element={
                    authedUser ? (
                      <HomeNotesPageWrapper />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                ></Route>

                <Route
                  path="/archive"
                  element={
                    authedUser ? (
                      <ArchiveNotesPageWrapper />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                ></Route>

                <Route
                  path="/addNotes"
                  element={
                    authedUser ? <AddNotesPage /> : <Navigate to="/login" />
                  }
                ></Route>

                <Route
                  path="/note/:id"
                  element={
                    authedUser ? <NoteDetailPage /> : <Navigate to="/login" />
                  }
                />
              </Routes>
            </main>
          </div>
        </div>
      </ThemeProvider>
    </LocaleProvider>
  );
}

export default App;
