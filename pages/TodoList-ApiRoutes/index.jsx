import Todos from "../../components/TodoList/TodoList";
import axios from "axios";
import { useEffect, useState } from "react";
import AddNewTodoForm from "../../components/AddNewTodo";

const TodoList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/todoList/")
      .then(({ data }) => {
        console.log(data);
        setData(data.todoList);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`/api/todoList/${id}`)
      .then(({ data }) => {
        setData(data.todos);
        setLoading(false);
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
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row justify-center items-start md:gap-20">
      <div className="w-full lg:w-[35vw] h-auto p-3 bg-stone-800 rounded-md md:mt-20">
        <AddNewTodoForm onAdd={AddTodoHandler} />
      </div>
      <div className="w-full lg:w-[50vw]">
        <Todos data={data} handleDelete={handleDelete} loading={loading} />
      </div>
    </div>
  );
};

export default TodoList;
