import ChildBComponent from "./ChildBComponent";

const ChildAComponent = (x) => {
    console.log(x);
    
  return (
    <div>
      <h1>ChildAComponent</h1>

      <ChildBComponent />
    </div>
  );
};

export default ChildAComponent;
