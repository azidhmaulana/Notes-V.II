import { useTheme } from "../../../hooks/useTheme";
import { FaMoon, FaSun } from "react-icons/fa";
import Button from "../Button";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </Button>
  );
}

export default ThemeToggleButton;
