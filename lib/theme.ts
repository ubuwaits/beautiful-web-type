export const THEME_STORAGE_KEY = "bwt-theme";

// Set the theme before the first paint, including when JavaScript hydration is delayed.
export const THEME_INIT_SCRIPT = `(() => {
  let theme;
  try { theme = localStorage.getItem("${THEME_STORAGE_KEY}"); } catch {}
  const dark = theme === "dark" || (theme !== "light" && matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
})();`;
