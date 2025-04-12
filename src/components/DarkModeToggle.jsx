
const DarkModeToggle = ({onClick,isDarkMode}) => {
  return (
    <button onClick={onClick} className="fixed top-20">
      {isDarkMode ? (
        <span role="img" aria-label="sun">
          🌞
        </span>
      ) : (
        <span role="img" aria-label="moon">
          🌜
        </span>
      )}
      {isDarkMode ? " Light Mode" : " Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
