import { CiEdit } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { TiInputChecked } from "react-icons/ti";
import Link from "next/link";
const Todos = ({ data, handleDelete, loading }) => {
  console.log(data);
  if (loading) return <div>is Loading ...</div>;
  return (
    <ul className="w-full h-auto flex flex-col justify-center gap-y-2 mt-20 p-2 bg-stone-800 rounded-md">
      {data.map((todo) => {
        return (
          // <Link href={`/TodoList-ApiRoutes/${todo._id}`}>
          //   <a>
              <li
                key={todo._id}
                className="w-full h-16 flex items-center justify-between text-xl px-4 bg-stone-700 rounded-lg"
              >
                <p className="text-slate-200">{todo.title}</p>
                <div className="flex gap-2">
                  <button className="px-2 py-1 rounded-lg  text-blue-400 border border-blue-500">
                    <CiEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(todo._id)}
                    className="px-2 py-1 rounded-lg  text-red-500 border border-red-500"
                  >
                    <FaRegTrashCan />
                  </button>
                  <button className="px-2 py-1 rounded-lg  text-green-400 border border-green-500">
                    <TiInputChecked />
                  </button>
                </div>
              </li>
          //   </a>
          // </Link>
        );
      })}
    </ul>
  );
};

export default Todos;
