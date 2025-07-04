import { useState } from "react"


export default function Main() {

const [board, setBoard] = useState(Array(42).fill(null))

console.log(board)

  return (
    <section className="">
      <div className="w-100 grid grid-cols-7 gap-y-2   mx-auto mt-20 border-6 rounded-sm bg-white">
        {
        board.map((board, index) => {
          return(
            <div key={index} className="rounded-full size-8 pointer-none: border-transparent bg-base-300 ">
              {board}
            </div>
          )
        })
      }
      </div>
    </section>
  )
}
