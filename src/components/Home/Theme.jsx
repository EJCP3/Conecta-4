const themes = ["dark", "retro", "cyberpunk", "valentine", "aqua", "lofi"];

export default function Theme() {
  const handleTheme = (btn) => {
    const nameTheme = btn.target.value;

    document.documentElement.setAttribute("data-theme", nameTheme);
  };

  const btnTheme = themes.map((theme) => (
    <input
      key={theme}
      type="radio"
      name="theme-buttons"
      className="btn theme-controller join-item"
      aria-label={theme.charAt(0).toUpperCase() + theme.slice(1)}
      value={theme}
      onClick={handleTheme}
    />
  ));

  return (
    <div className="join   join-vertical md:join-horizontal"> {btnTheme} </div>
  );
}
