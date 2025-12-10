import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  // Toggle dark mode by adding/removing class on <html>
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const links = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="flex items-center justify-between py-6">
      {/* Logo / Name */}
      <div className="flex items-center gap-3">
        <motion.h1
          initial={{ y: -6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-500"
        >
          M.Mishra
        </motion.h1>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-6">
        {links.map((l) => (
          <button
            key={l.id}
            onClick={() => onNavigate(l.id)}
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-emerald-400 transition"
          >
            {l.label}
          </button>
        ))}

        {/* Resume button */}
        <a href="/resume.pdf" download>
          <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 shadow">
            Resume
          </button>
        </a>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setIsDark((v) => !v)}
          className="p-2 rounded-md bg-gray-100 dark:bg-gray-700"
        >
          {isDark ? (
            /* Moon Icon */
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          ) : (
            /* Sun Icon */
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Section */}
      <div className="md:hidden flex items-center gap-3">
        {/* Dark mode toggle mobile */}
        <button
          onClick={() => setIsDark((v) => !v)}
          className="p-2 rounded-md bg-gray-100 dark:bg-gray-700"
        >
          {isDark ? (
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
          )}
        </button>

        {/* Mobile menu icon */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="p-2 rounded-md bg-gray-100 dark:bg-gray-700"
        >
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d={
                open
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute left-4 right-4 top-20 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-lg"
        >
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => {
                  onNavigate(l.id);
                  setOpen(false);
                }}
                className="py-2 text-left"
              >
                {l.label}
              </button>
            ))}

            <a href="/resume.pdf" download>
              <button className="w-full px-4 py-2 rounded-md bg-blue-600 text-white">
                Resume
              </button>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
