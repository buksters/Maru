import { GraphQLClient, gql } from "graphql-request";
import { useState } from "react";


async function fetchPosts() {
  const graphcms = new GraphQLClient("https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clgl6bzwk3to901tge3c95ke1/master")
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

function Posts(){
  const [posts, setPosts] = useState(null);
  if (posts===null){
    fetchPosts().then(posts => {
      setPosts(posts);
    });
  }
}

export default posts





