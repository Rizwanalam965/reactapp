import ChildAComponent from "./ChildAComponent";

const ParentComponent = (x) => {

  console.log(x);
  //{prop:"Hii Everyone",children:{}}
  

  return (
    <div>
      <h1>ParentComponent</h1>

      <ChildAComponent/>
       
     
    </div>
  );
};

export default ParentComponent;
