import "./App.css";
import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);

  const handlerMinus = () => setCount(count - 1);
  const handlerPlus = () => setCount(count + 1);

  return (
    <>
      <div className={"container mx-auto text-center font-sans"}>
        <h1 className={"font-bold text-4xl text-center mt-3.5 mb-3.5"}>{count}</h1>
        <button
          className={
            "mb-5 text-xl bg-sky-500 mr-3 p-3 rounded-lg hover:bg-sky-700 hover:text-white"
          }
          onClick={handlerMinus}
        >
          Count-
        </button>
        <button
          className={"mb-5 text-xl bg-red-500 p-3 rounded-lg hover:bg-red-700 hover:text-white"}
          onClick={handlerPlus}
        >
          Count+
        </button>
      </div>
    </>
  );
};
