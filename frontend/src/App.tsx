import { shallow } from "zustand/shallow"
import { globalStore } from "./store/global.store"
import { useEffect } from "react";

function App() {

  const { title, count } = globalStore((state) => ({
    count: state.count,
    title: state.title,
    users: state.users
  }), shallow)

  const { increment, getUsers, multiply } = globalStore();

  useEffect(() => {
    getUsers()
  }, [getUsers])



  return (
    <div>
      <h1 className="text-3xl font-bold" >{title}</h1>
      <p>El contador esta en: {count}</p>
      <br />
      <button onClick={() => increment(1)}>Incrementar + 1 </button>
      <br />
      <button onClick={() => multiply(2)}>Multiplicar x 2 </button>
    </div>
  )
}

export default App