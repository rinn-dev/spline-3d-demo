import { useEffect, useRef, useState } from "react";
import "./App.css";
import Spline, { SPEObject } from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";

function App() {
  const [size, setSize] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const cube = useRef<SPEObject | undefined>(undefined);

  function onLoad(spline: Application) {
    const obj = spline.findObjectByName("Cube");
    // or
    // const obj = spline.findObjectById('8E8C2DDD-18B6-4C54-861D-7ED2519DE20E');

    // save it in a ref for later use
    cube.current = obj;
    console.log(spline);
  }

  useEffect(() => {
    setSize({
      x: document.documentElement.clientWidth,
      y: document.documentElement.clientHeight,
    });
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: size.y }}>
      <Spline
        style={{ top: 0, left: 0, position: "absolute" }}
        onLoad={onLoad}
        scene={"/scene.splinecode"}
      />
    </div>
  );
}

export default App;
