
const Button = ({
  label,
  children,
  onClick,
  type = "button",
  className = "",
  variant = "oren",
  ikon,
}) => {
  const variantClasses = {
  brown: "bg-brown text-white border-2 border-brown",
  oren: "bg-white text-orange-600 border-2 border-orange-600",
  biru: "bg-blue-500 text-white border-2 border-blue-500",
};


  const baseClasses =
    "flex items-center gap-2 px-8 py-2 rounded-lg font-bold border-2 transition";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant] || ""} ${className}`}
    >
      {ikon && <span className="text-lg">{ikon}</span>}
      {children || label}
    </button>
  );
};

export default Button;