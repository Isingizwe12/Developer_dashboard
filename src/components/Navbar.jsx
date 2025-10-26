
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="bg-white dark:bg-gray-900 shadow flex justify-between py-4 px-2">
      <h2 className="text-gray-800 dark:text-white font-bold text-2xl">
        Developer Dashboard
      </h2>

      <button
        onClick={toggleTheme}
        className="bg-blue-400 dark:bg-yellow-400 px-4 py-2 rounded text-white dark:text-black font-semibold cursor-pointer hover:bg-blue-600 dark:hover:bg-yellow-500"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}

export default Navbar;
