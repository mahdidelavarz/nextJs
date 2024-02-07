import axios from "axios";
import { useRouter } from "next/router";
const SingleProduct = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>is loading ...</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <h2>{product.description}</h2>
      <span>{product.price}</span>
    </div>
  );
};

export default SingleProduct;

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await axios.get(
    `http://localhost:4000/products/${params.productId}`
  );

  return {
    props: {
      product: data,
    },
    revalidate: 1,
  };
}
