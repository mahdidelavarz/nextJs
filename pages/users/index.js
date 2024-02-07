import axios from "axios";
import User from "../../components/User";
const UsersList = (props) => {
  console.log(props);
  const data = props.dataList.results;
  return (
    <div>
      <h1>Users list</h1>
      {data.map((user) => {
        return <User user={user} key={user.id} />;
      })}
    </div>
  );
};

export default UsersList;

export async function getStaticProps() {
  const { data } = await axios.get("https://rickandmortyapi.com/api/character");
  //   console.log(data);
  return {
    props: { dataList: data },
  };
}
