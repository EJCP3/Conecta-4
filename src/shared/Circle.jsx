const Circle = ({ children, updateBoard, index, isAnimating = false }) => {
  const handleClick = () => {
    // Prevenir clicks durante animación
    if (isAnimating) return;
    updateBoard(index);
  };

  // Estilos para las piezas colocadas
  const getPieceStyle = (piece) => {
    if (!piece) return "";
  };

  return (
    <div
      onClick={handleClick}
      className={`
        cursor-pointer rounded-full size-8 md:size-10 lg:size-14 
        bg-base-300 z-10 flex items-center justify-center
        transition-all duration-300 ease-in-out
        ${
          isAnimating
            ? "cursor-not-allowed opacity-70"
            : "hover:scale-110 hover:bg-base-200"
        }
      `}
    >
      {children && <div className={getPieceStyle(children)}>{children}</div>}
    </div>
  );
};

export default Circle;
