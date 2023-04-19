import { GraphQLClient, gql } from "graphql-request";

export default async function fetchPosts() {
  const graphcms = new GraphQLClient("https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clgl6bzwk3to901tge3c95ke1/master")
  const QUERY = gql`
    {
      posts {
        id
        title
        slug
        datePublished
        tag
        description
        coverPhoto {
          url
        }
        content {
          html
        }
      }
    }
  `
  const { posts } = await graphcms.request(QUERY);
  return posts;
}



