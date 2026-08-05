import { Link } from "react-router-dom";

function Button({
  children,
  to,
  onClick,
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-lg",

    secondary:
      "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50",

    dark:
      "bg-slate-900 text-white hover:bg-slate-800",
  };

  if (to) {
    return (
      <Link
        to={to}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;