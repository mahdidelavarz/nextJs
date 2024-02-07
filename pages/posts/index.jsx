import React from "react";
import Link from "next/link";
function Posts() {
  return (
    <div>
      <h1>this is Post page</h1>
      <ul>
        <li>
          <h2>this is post 1</h2>
          <Link href="/posts/1">
            <a>go to Post-1</a>
          </Link>
        </li>
        <li>
          <h2>this is post 2</h2>
          <Link href="/posts/2">
            <a>go to Post-2</a>
          </Link>
        </li>
        <li>
          <h2>this is post 3</h2>
          <Link href="/posts/3">
            <a>go to Post-3</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Posts;
