import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>this is Home page</h1>
      <Link href="/posts">
        <a>go to posts page</a>
      </Link>
      <br />
      <Link href="/episodes">
        <a>go to episodes page</a>
      </Link>
      <br />
      <Link href="/users">
        <a>go to users page</a>
      </Link>
      <Link href="/TodoList-ApiRoutes">
        <a>go to TodoList</a>
      </Link>

    </div>
  );
}
