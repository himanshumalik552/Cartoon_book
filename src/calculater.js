import React from "react";

const calculater = () => {
  const createDigit = () => {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = ["/", "*", "+", "-", "."];

    const updateCalc = (value) => {
      setCalc(calc + value);
    };
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(<button key={i}>{i}</button>);
    }
    return digits;
  };

  return (
    <div>
      <div className="calculator">
        <div className="display"></div>
        {result ? <span>(0)</span> : ""}
        {calc || "0"}
        <div className="operators">
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>
          <button>DEL</button>
        </div>
        <div className="digits">
          {createDigit()}
          <button>0</button>
          <button>.</button>
          <button>=</button>
          <button>/</button>
        </div>
      </div>
    </div>
  );
};

export default calculater;
