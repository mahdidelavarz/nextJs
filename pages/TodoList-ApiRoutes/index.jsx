import Todos from "../../components/TodoList/TodoList";
import axios from "axios";
import { useEffect, useState } from "react";
import AddNewTodoForm from "../../components/AddNewTodo";
import Todo from "../../server/models/todo";
import Layout from "../../containers/layout";
const TodoList = ({ todos }) => {
  const [data, setData] = useState(todos);
  const [loading, setLoading] = useState(false);
  console.log(data);

  // ! when we want to get data on client side
  // useEffect(() => {
  //   axios
  //     .get("/api/todoList/")
  //     .then(({ data }) => {
  //       console.log(data);
  //       setData(data.todoList);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const handleDelete = (id) => {
    axios
      .delete(`/api/todoList/${id}`)
      .then(({ data }) => {
        setData(data.todos);
      })
      .catch((err) => console.log(err));
  };
  const AddTodoHandler = (e, formData) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post(`/api/todoList/`, { formData })
      .then(({ data }) => {
        setData(data.todoList);
      })
      .catch((err) => console.log(err));
  };
  const handleCheck = (id) => {
    axios
      .put(`/api/todoList/checked/${id}`)
      .then((res) => {
        setData(res.data.todos);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Layout>
      <div className="w-full h-[70vh] flex flex-col lg:flex-row justify-center items-start md:gap-20">
        <div className="w-full lg:w-[35vw] h-auto p-3 bg-stone-800 rounded-md md:mt-20">
          <AddNewTodoForm onAdd={AddTodoHandler} />
        </div>
        <div className="w-full lg:w-[50vw]">
          <Todos
            data={data}
            handleDelete={handleDelete}
            loading={loading}
            handleCheck={handleCheck}
          />
        </div>
      </div>
    </Layout>
  );
};

export default TodoList;

// !when we want to get data on server side (ssr)

export async function getServerSideProps(context) {
  const todoList = await Todo.find({});
  console.log(todoList);
  return {
    props: {
      todos: JSON.parse(JSON.stringify(todoList)),
    },
  };
}
