import axios from "axios";
import Link from "next/link";
import Layout from "../../containers/layout";
const Products = (props) => {
  console.log(props);
  return (
    <Layout>
      <div>
      <h1>Products List</h1>
      <ul>
        {props.productList.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <a>
                <div>
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <span>{product.price}</span>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </Layout>
  );
};

export default Products;

export async function getStaticProps() {
  const { data } = await axios.get("http://localhost:4000/products");

  return {
    props: { productList: data },
    revalidate: 1,
  };
}
