import { useState, useEffect } from "react";
import getAdvice from "./api";
import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = () => {
    getAdvice()
      .then((advice) => {
        setAdvice(advice);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const handleClick = () => {
    fetchAdvice();
  };

  return (
    <div className="App">
      <div>
        <h3>{advice}</h3>
      </div>

      <div>
        <button onClick={handleClick}>Click</button>
      </div>
    </div>
  );
};

export default App;
