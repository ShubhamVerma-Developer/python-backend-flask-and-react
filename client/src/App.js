import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/members").then((res) => {
      console.log(res.data.members);
      setData(res.data.members);
    });
  }, []);

  return (
    <div>
      {data.map((item) => {
        return <li>{item}</li>;
      })}
    </div>
  );
}

export default App;
