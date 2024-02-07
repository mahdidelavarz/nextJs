import { CiEdit } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { TiInputChecked } from "react-icons/ti";
import Link from "next/link";


const Todos = ({ data, handleDelete, loading , handleCheck }) => {
 
  console.log(data);
  if (loading) return <div>is Loading ...</div>;
  return (
    <ul className="w-full h-auto flex flex-col justify-center gap-y-2 mt-20 p-2 bg-stone-800 rounded-md">
      {data.map((todo) => {
        return (
          <li
            key={todo._id}
            className="w-full h-16 flex items-center justify-between text-xl px-4 bg-stone-700 rounded-lg"
          >
            <Link href={`/TodoList-ApiRoutes/${todo._id}`}>
              <a>
                <p
                  className={`text-slate-200 ${
                    todo.isCompeted && "line-through"
                  }`}
                >
                  {todo.title}
                </p>
              </a>
            </Link>
            <div className="flex gap-2">
              <Link href={`/TodoList-ApiRoutes/edit/${todo._id}`}>
                <a className="px-2 py-1 rounded-lg  text-blue-400 border border-blue-500">
                  <CiEdit />
                </a>
              </Link>
              <button
                onClick={() => handleDelete(todo._id)}
                className="px-2 py-1 rounded-lg  text-red-500 border border-red-500"
              >
                <FaRegTrashCan />
              </button>
              <button
                onClick={() => handleCheck(todo._id)}
                className="px-2 py-1 rounded-lg  text-green-400 border border-green-500"
              >
                <TiInputChecked />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
