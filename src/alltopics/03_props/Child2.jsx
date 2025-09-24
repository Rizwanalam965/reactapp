const Child2 = (props) => {
  console.log(props); //{prop1: 'Reactjs', prop2: Array(3), prop3: {…}}

  let { prop1, prop2, prop3 } = props;
  console.log(prop1, prop2, prop3);

  return (
    <div>
      <h1>Child 2 Component</h1>
    </div>
  );
};
export default Child2;
