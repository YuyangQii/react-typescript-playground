import { useFetch } from "./useFetch";

export default function Users() {
  const { data, loading, error } = useFetch(
    "https://..."
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h2>User List</h2>
      {/* {data.map((user) => {
        return <p>{user.name}</p>;
      })} */}

      {data &&
        data.map((user: any) => {
          return (
            <p key={user.id}>
              {user.name}
            </p>
          );
        })}
    </div>
  );
}