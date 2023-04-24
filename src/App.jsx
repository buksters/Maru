import './App.css'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useState, useEffect, createContext } from 'react';
import Home  from './components/Home'
import About from './components/About'
import Archive from './components/Archive'
import Post from './components/Post';
import fetchPosts from './components/blogData';
import { PostsContext } from './components/PostsContext';
// import blogposts from './components/blogDataCopy';


function App() {

  const [posts, setPosts] = useState(null);
  // const PostsContext = createContext(null);

  useEffect(() => {
    if (posts===null){
      fetchPosts().then(posts => {
        setPosts(posts);
      });
    }
  }, []);

  // console.log("BLOGPOSTS: ", blogposts)

  return (
    <>
      <Router>
        <PostsContext.Provider value={posts}> 
          <Routes>
            <Route path="/" >
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route exact path="/archive/*" element={<Archive posts={posts} setPosts={setPosts}/>} />
              <Route path="/archive/:slug" element={<Post posts={posts} setPosts={setPosts}/>} />
            </Route >
          </Routes>
        </PostsContext.Provider>
      </Router>
    </>
  )
}

export default App
