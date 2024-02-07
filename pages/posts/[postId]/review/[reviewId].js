import { useRouter } from "next/router";
import React from "react";

function Review() {
  const router = useRouter();
  const { postId, reviewId } = router.query;
  return (
    <div>
      post {postId}and review {reviewId}
    </div>
  );
}

export default Review;
