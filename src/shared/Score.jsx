export default function Score({ name, punto, order, icon }) {
  return (
    <div
      className={`w-40  rounded-xl border-b-10 border-3 bg-base-100 p-6  text-center ${order}`}
    >
      <img  />
      <h2 className="text-xl"> {name} </h2>
      <p className="text-4xl"> {punto} </p>
    </div>
  );
}
