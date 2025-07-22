export default function Btn({text, color, btnName, img, open, btnStyle = "border-1 border-black border-b-8" }) {
  return (
    <button
      onClick={open}
      className={`flex w-full justify-between px-4  rounded-box  
      grow place-items-center h-20
      transition-colors duration-500 ${color} ${btnStyle}`}
    >
      <span className={`mx-auto text-x md:text-xl ${text} `}>{btnName}</span>
      {img ? <img className="size-5" src={img} /> : null}
    </button>
  );
}
