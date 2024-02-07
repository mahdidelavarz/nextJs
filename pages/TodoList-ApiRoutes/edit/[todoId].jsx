import { useState } from "react";
import { getOneTodo } from "../../api/todoList/[todoId]";
import { useRouter } from "next/router";
import axios from "axios";
import Layout from "../../../containers/layout";
const EditTodo = ({ todo }) => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(todo.isCompeted);
  const [formData, setFormData] = useState({
    title: todo.title,
    description: todo.description,
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const editHandler = (e, formData) => {
    e.preventDefault();
    axios
      .put(`/api/todoList/${router.query.todoId}`, {
        formData: { ...formData, isCompeted: isChecked },
      })
      .then((res) => {
        console.log(res.data);
        router.push("/TodoList-ApiRoutes");
      })
      .catch((err) => console.log(err));
  };
  return (
    <Layout>
      <div className="px-10 flex flex-col gap-6 mt-10">
        <h1 className="text-2xl text-teal-400">this is Edit Todo page </h1>
        <form
          className="w-full h-auto flex flex-col gap-4 "
          onSubmit={(e) => editHandler(e, formData)}
        >
          <div className="flex flex-col gap-1">
            <label className="text-slate-200">Title</label>
            <input
              name="title"
              className="px-4 py-3 rounded-lg border border-stone-500"
              placeholder="todo title ..."
              type="text"
              value={formData.title}
              onChange={changeHandler}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-slate-200">Description</label>
            <textarea
              onChange={changeHandler}
              name="description"
              value={formData.description}
              placeholder="todo description ..."
              cols="40"
              rows="4"
              className="px-4 rounded-lg border border-stone-500 py-3"
            ></textarea>
          </div>

          <div className="text-xl flex gap-2 ">
            <input
              onChange={() => setIsChecked(!isChecked)}
              type="checkbox"
              name="checked"
              id="checked"
              checked={isChecked}
            />
            <label htmlFor="checked">Check Todo</label>
          </div>

          <div className="h-12 flex justify-between px-4">
            <button
              // onClick={router.push("/")}
              type="submit"
              className="px-20 bg-stone-600 py-3 rounded-xl hover:bg-stone-500 duration-300 ease-in-out "
            >
              Back
            </button>
            <button
              type="submit"
              className="w-48 py-2 bg-rose-500 rounded-xl hover:bg-rose-600 duration-300"
            >
              Update Todo
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default EditTodo;

export async function getServerSideProps({ params, query }) {
  const todo = await getOneTodo(query);
  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
    },
  };
}
