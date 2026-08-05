function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white
        rounded-3xl
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-300
        p-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;