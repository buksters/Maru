import './App.css'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home  from './components/Home'
import About from './components/About'
import Archive from './components/Archive'
import Post from './components/Post';
import fetchPosts from './components/blogData';

// async function fetchPosts() {
//   const graphcms = new GraphQLClient("https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clgl6bzwk3to901tge3c95ke1/master")
//   const QUERY = gql`
//     {
//       posts {
//         id
//         title
//         slug
//         datePublished
//         tag
//         description
//         coverPhoto {
//           url
//         }
//         content {
//           html
//         }
//       }
//     }
//   `
//   const { posts } = await graphcms.request(QUERY);
//   return posts;
// }


function App() {

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    if (posts===null){
      fetchPosts().then(posts => {
        setPosts(posts);
      });
    }
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route exact path="/archive/*" element={<Archive posts={posts} setPosts={setPosts}/>} />
            <Route path="/archive/:slug" element={<Post posts={posts} setPosts={setPosts}/>} />
          </Route >
        </Routes>
      </Router>
    </>
  )
}

export default App
