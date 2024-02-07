import axios from "axios";
import useSWR from "swr";
const Profile = () => {
  const { data, err } = useSWR("getUserProfile", async () => {
    const { data } = await axios.get("http://localhost:4000/profile");
    return data;
  });
  if (err) return <div>failed to load data</div>;
  if (!data) return <div>Loading</div>;
  return (
    <div>
      {data.map((profile) => {
        return (
          <div className="w-full h-20 bg-green-400 flex justify-center items-center">
            <h1>Profile swr Page</h1>
            <h2>
              name : {profile.name} - expert : {profile.expert}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
