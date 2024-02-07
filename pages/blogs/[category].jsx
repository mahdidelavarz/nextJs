import axios from "axios";
const SingleBlog = ({ blogs, category }) => {
  return (
    <div>
      <h1>Blogs for category : {category}</h1>
      {blogs.map((blog) => (
        <div>
          <h2>Title : {blog.title}</h2>
          <p>category : {blog.category}</p>
          <span>description : {blog.description}</span>
          <br />
        </div>
      ))}
    </div>
  );
};

export default SingleBlog;

export async function getServerSideProps({ params }) {
  const { data } = await axios.get(
    `http://localhost:4000/blogs?category=${params.category}`
  );
  console.log(data);
  return {
    props: {
      category: params.category,
      blogs: data,
    },
  };
}
