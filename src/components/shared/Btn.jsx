export default function Btn({ color, texto, img,open }) {
  

  return (
    <a
      onClick={open}
      className={`flex  justify-between px-4  rounded-box  h-20 grow place-items-center border-1 border-black border-b-8  transition-colors duration-500 ${color}`}
    >
      <span className="text-x md:text-xl">{texto}</span>
      {img ? <img className="size-5" src={img} /> : null}
    </a>
  );
}
