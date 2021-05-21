import React, { useState } from "react";
import data from "./data";
function App() {
  const [paragraphs, setParagraphs] = useState(data);
  const [count, setCount] = useState(0);

  const changeHandle = (e) => {
    const value = e.target.value;
    setCount(value);
  };

  const handleClick = () => {
    if (count < 0) {
      setParagraphs(data.slice(0, 1));
    } else {
      setParagraphs(data.slice(0, count));
    }
  };

  return (
    <div>
      <h2 className="uppercase pt-8 text-center">
        tired of boring lorem ipsum?
      </h2>
      <div className="flex justify-center items-center">
        <h5 className="bg-yellow-100 p-2">Paragraphs:</h5>
        <input onChange={changeHandle} type="number" />
        <button
          onClick={handleClick}
          className="p-2 bg-yellow-500 text-yellow-100 rounded-2xl"
        >
          Generate
        </button>
      </div>
      <div className="m-24">
        {paragraphs.map((paragraph) => {
          return <p>{paragraph}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
