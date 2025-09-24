const Child3 = (props) => {
  console.log(props); //{getData:f}

  //! this function will get called after button click
  function sendData() {
    props.getData("Hello From Child 3");// send String data to Parent3 as arguements
  }

  return (
    <div>
      <h1>Child 3</h1>
      <button onClick={sendData}>send data</button>
    </div>
  );
};
export default Child3;
