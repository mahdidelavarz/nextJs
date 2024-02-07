import React from "react";
import { useRouter } from "next/router";

function FirstPost() {
  const router = useRouter();
  const postId = router.query.postId;
  return <div>this is Post number {postId}</div>;
}

export default FirstPost;
