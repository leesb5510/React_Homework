import { useState } from "react";
import styled from "styled-components";

function App() {
  const [count, setCount] = useState(0);

  const plusBtn = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const minusBtn = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const resetBtn = () => {
    setCount(0);
  };

  return (
    <>
      <MainDiv>
        <div>{count}</div>
        <button className="btn" onClick={plusBtn}>
          +
        </button>
        <button className="btn" onClick={minusBtn}>
          -
        </button>
        <button className="btn" onClick={resetBtn}>
          Reset
        </button>
      </MainDiv>
    </>
  );
}

const MainDiv = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 10px;
  .btn {
    background-color: blue;
    color: white;
    border-radius: 10px;
    border: none;
    padding: 10px;
  }
`;

export default App;
