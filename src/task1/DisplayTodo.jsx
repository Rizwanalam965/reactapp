import styles from "./displaytodo.module.css";

const DisplayTodo = ({ allTodos, editTodo, deleteTodo }) => {
  console.log(allTodos); //[{},{},...]

  return (
    <div>
      {allTodos.map((ele) => {
        return (
          <div key={ele.id} className={styles.todoDiv}>
            <h2>{ele.text}</h2>
            <button onClick={() => editTodo(ele.id)}>edit</button>
            <button onClick={() => deleteTodo(ele.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayTodo;
