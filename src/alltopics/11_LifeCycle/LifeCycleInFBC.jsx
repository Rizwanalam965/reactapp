import React, { useEffect, useRef, useState } from "react";

const LifeCycleInFBC = () => {
  const [count, setCount] = useState(0);
  const initialRender = useRef(true);

  useEffect(() => {
    console.log("render");
  });

  useEffect(() => {
    console.log("component did mount");

    return () => {
      console.log("component will unmount");
    };
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return ;
    }
    console.log("component did update");

    return () => {
      console.log("prev state was ", count);
    };
  }, [count]);

  return (
    <div>
      <h1>LifeCycleInFBC {count}</h1>
      <button className="bg-amber-200" onClick={() => setCount(count + 1)}>
        increment
      </button>
    </div>
  );
};

export default LifeCycleInFBC;
