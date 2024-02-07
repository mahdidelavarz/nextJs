export default function handler(req, res) {
    console.log(req.query)
  return res.status(200).json({ postId: req.query.postId });
}
