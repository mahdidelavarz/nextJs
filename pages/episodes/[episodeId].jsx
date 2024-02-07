import axios from "axios";
const Episode = ({ episode }) => {
  return (
    <div>
      <h2>{episode.name}</h2>
      <p>{episode.air_date}</p>
    </div>
  );
};

export default Episode;

export async function getStaticPaths() {
  const { data } = await axios.get("https://rickandmortyapi.com/api/episode");
  const paths = data.results.map((item) => {
    return { params: { episodeId: item.id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/episode/${params.episodeId}`
  );
  return {
    props: {
      episode: data,
    },
  };
}
