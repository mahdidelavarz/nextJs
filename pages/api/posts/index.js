export default function handler(req, res) {
  return res
    .status(200)
    .json({ posts: [{ title: "post 1" }, { title: "post 2" }] });
}
