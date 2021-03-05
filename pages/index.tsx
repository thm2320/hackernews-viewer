import { useQuery, gql } from "@apollo/client";

const PostQuery = gql`
  query {
    posts{
      title,
      time,
      url,
      author,
      time,
      comments,
      points
    }
  }
`;


export default function Home({ posts }) {
  const { data, error, loading } = useQuery(PostQuery);

  if (loading) {
    return <div>Loading</div>
  }

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
}
