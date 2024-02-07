import { useState } from "react";

const AddNewTodoForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form
        className="w-full h-auto flex flex-col gap-4 "
        onSubmit={(e) => onAdd(e, formData)}
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
        <div className="h-12 flex justify-between px-4">
          <button
            type="submit"
            className="px-20 bg-stone-600 py-3 rounded-xl hover:bg-stone-500 duration-300 ease-in-out "
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-48 py-2 bg-rose-500 rounded-xl hover:bg-rose-600 duration-300"
          >
            Add New todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewTodoForm;
