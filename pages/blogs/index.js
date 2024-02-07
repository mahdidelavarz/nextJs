import axios from "axios";
import Layout from "../../containers/layout";
const Blogs = ({ blogs }) => {
  console.log(blogs);
  return (
    <Layout>
      <div>
      <h1>Blogs List</h1>
      {blogs.map((blog) => {
        return (
          <div>
            <h2>Title : {blog.title}</h2>
            <p>category : {blog.category}</p>
            <br />
          </div>
        );
      })}
    </div>
    </Layout>
  );
};

export default Blogs;

export async function getServerSideProps() {
  const { data } = await axios.get("http://localhost:4000/blogs");

  return {
    props: {
      blogs: data,
    },
  };
}
