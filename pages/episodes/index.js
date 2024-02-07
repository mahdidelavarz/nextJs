import axios from "axios";
import Link from "next/link";
import User from "../../components/User";
import Layout from "../../containers/layout";
const Episodes = (props) => {
  console.log(props);
  const data = props.episodeList.results;
  return (
    <Layout>
      <div>
      <h1>Episode list</h1>
      {data.map((episode) => {
        return (
          <h2 key={episode.id}>
            <Link href={`/episodes/${episode.id}`}>
              <a>
                {episode.episode} name: {episode.name}
              </a>
            </Link>
          </h2>
        );
      })}
    </div>
    </Layout>
  );
};

export default Episodes;

export async function getStaticProps() {
  const { data } = await axios.get("https://rickandmortyapi.com/api/episode");

  return {
    props: { episodeList: data },
  };
}
