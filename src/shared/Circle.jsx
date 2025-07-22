

export const Circle = ({ children, updateBoard, index }) => {
  
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div
      onClick={handleClick}
      className=" rounded-full size-8 md:size-10 lg:size-14 pointer-none  bg-base-300 z-10 "
    >
      {children}
    </div>
  );
};