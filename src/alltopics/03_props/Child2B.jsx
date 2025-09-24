const Child2B = (props) => {
  console.log(props); //{data: {str:"",arr:[],obj:{}}}
  
  let { str, arr, obj } = props.data;

  return (
    <div>
      <h1>Child2B Component {str}</h1>
    </div>
  );
};
export default Child2B;
