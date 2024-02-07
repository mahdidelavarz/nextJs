import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../containers/layout";

export default function Home() {
  return (
    <Layout>
      <div className="w-full h-[70vh] flex justify-center items-center gap-2 flex-wrap">
      <div className="w-[40vw] h-20 bg-stone-700 rounded-lg shadow-md shadow-rose-500 text-slate-200 text-xl flex justify-center items-center m-4">
        <Link href="/posts">
          <a>go to posts page</a>
        </Link>
      </div>
      <div className="w-[40vw] h-20 bg-stone-700 rounded-lg shadow-md shadow-rose-500 text-slate-200 text-xl flex justify-center items-center m-4">
        <Link href="/episodes">
          <a>go to episodes page</a>
        </Link>
      </div>
      <div className="w-[40vw] h-20 bg-stone-700 rounded-lg shadow-md shadow-rose-500 text-slate-200 text-xl flex justify-center items-center m-4">
        <Link href="/users">
          <a>go to users page</a>
        </Link>
      </div>
      <div className="w-[40vw] h-20 bg-stone-700 rounded-lg shadow-md shadow-rose-500 text-slate-200 text-xl flex justify-center items-center m-4">
        <Link href="/TodoList-ApiRoutes">
          <a>go to TodoList</a>
        </Link>
      </div>
      </div>
    </Layout>
  );
}
