import axios from "axios";
import { getOneTodo } from "../api/todoList/[todoId]";
const SingleTodo = ({ todo }) => {
  return (
    <div>
      <h1>this is single Todo page </h1>
      <h2>{todo.title}</h2>
      <h4>{todo.description}</h4>
    </div>
  );
};

export default SingleTodo;

export async function getServerSideProps({ params, query }) {
  const todo = await getOneTodo(query);
  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
    },
  };
}
