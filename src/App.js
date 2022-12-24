import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [boxwidth, setBoxwidth] = useState(0);
  const [boxheight, setBoxheight] = useState(0);
  const [box, setBox] = useState([]);

  const Widthfunc = (e) => {
    e.preventDefault(e);
    setBoxwidth(e.target.value);
  };
  const Heightfunc = (e) => {
    e.preventDefault(e);
    setBoxheight(e.target.value);
  };
  function handleClick(e) {
    e.preventDefault(e);
    let mystyle = {
      width: boxwidth,
      height: boxheight,
    };
    setBox([...box, mystyle]);
    setBoxwidth(0);
    setBoxheight(0);
    console.log(box);
  }

  return (
    <div className="App">
      <input
        placeholder="Enter box width"
        type="number"
        max="700"
        min="0"
        onChange={(e) => Widthfunc(e)}
        value={boxwidth}
      />
      <input
        placeholder="Enter box height"
        type="number"
        max="700"
        min="0"
        onChange={(e) => Heightfunc(e)}
        value={boxheight}
      />
      <button onClick={handleClick}>Add box size</button>
      <div style={{ display: "flex" }}>
        {box.map((item) => {
          let boStyle = {
            backgroundColor: "yellow",
            marginTop:30,
            marginRight:10,
            width: `${item.width}px`,
            height: `${item.height}px`,
          };
          return <div key={uuidv4()} style={boStyle}>dbfvfdbdf</div>;
        })}
      </div>
    </div>
  );
}

export default App;
