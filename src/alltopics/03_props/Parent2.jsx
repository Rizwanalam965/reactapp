import Child2 from "./Child2";
import Child2B from "./Child2B";

const Parent2 = () => {
  let str = "Reactjs";
  let arr = ["Frontend", "Backend", "Database"];
  let obj = {
    id: 1,
    ename: "Rohit",
  };
  return (
    <div>
      <h1>Parent 2 Component</h1>
      <Child2 prop1={str} prop2={arr} prop3={obj} />

      <Child2B data = {{str,arr,obj}}/>
    </div>
  );
};
export default Parent2;
