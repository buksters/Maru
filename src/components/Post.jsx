import '../App.css'
import Nav from './Nav';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import fetchPosts from './blogData';


export default function Post({posts, setPosts}) {

  useEffect(() => {
    if (posts===null) {
      fetchPosts().then(posts => {
        setPosts(posts);
      });
    }
  })
  
  if (!posts) return

  const {slug} = useParams()
  let img_src, title, date, description, tag, content;
  posts.filter((post) => post.slug === slug).map((post) => (
    img_src = post.coverPhoto.url,
    title = post.title,
    date = post.datePublished.replaceAll('-', ' · '),
    description = post.description,
    tag = post.tag,
    content = post.content.html
  ))

  return (
    <div className='page' id="post">
      <Nav displayBack={true} />
      
      <div className="page-wrapper">
        <div className="tags">
          <div id="date" className='tag'>{date}</div>
          <div id="type" className='tag'>{tag}</div>
        </div>
        <div className="page-title">
        
          {/* <svg className='blobs' viewBox="10 -10 900 600" width="1300" height="1300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(440.95669168015354 290.0914119429407)"><path d="M150.8 -172.7C200 -138.4 247.7 -95.2 259.2 -43.7C270.6 7.8 245.7 67.6 211.9 118.6C178 169.6 135.2 211.6 81.6 236.6C27.9 261.5 -36.5 269.4 -78.9 242.7C-121.4 216.1 -141.9 154.9 -171.7 100.5C-201.5 46.1 -240.6 -1.6 -243.7 -53.3C-246.9 -104.9 -214.1 -160.5 -167.5 -195.2C-120.8 -230 -60.4 -244 -4.8 -238.3C50.8 -232.5 101.6 -207 150.8 -172.7" style={{fill: "transparent", stroke: "#9cafb7", strokeWidth: "5px"}} ></path></g></svg> */}
          {/* <svg className='blobs' viewBox="0 0 900 600" width="1300" height="1300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(440.95669168015354 290.0914119429407)"><path d="M150.8 -172.7C200 -138.4 247.7 -95.2 259.2 -43.7C270.6 7.8 245.7 67.6 211.9 118.6C178 169.6 135.2 211.6 81.6 236.6C27.9 261.5 -36.5 269.4 -78.9 242.7C-121.4 216.1 -141.9 154.9 -171.7 100.5C-201.5 46.1 -240.6 -1.6 -243.7 -53.3C-246.9 -104.9 -214.1 -160.5 -167.5 -195.2C-120.8 -230 -60.4 -244 -4.8 -238.3C50.8 -232.5 101.6 -207 150.8 -172.7" style={{fill: "transparent", stroke: "#9cafb7", strokeWidth: "5px", rotate: "90deg"}} ></path></g></svg> */}
          {/* <svg className='blobs' viewBox="-20 10 900 600" width="1300" height="1300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(440.95669168015354 290.0914119429407)"><path d="M150.8 -172.7C200 -138.4 247.7 -95.2 259.2 -43.7C270.6 7.8 245.7 67.6 211.9 118.6C178 169.6 135.2 211.6 81.6 236.6C27.9 261.5 -36.5 269.4 -78.9 242.7C-121.4 216.1 -141.9 154.9 -171.7 100.5C-201.5 46.1 -240.6 -1.6 -243.7 -53.3C-246.9 -104.9 -214.1 -160.5 -167.5 -195.2C-120.8 -230 -60.4 -244 -4.8 -238.3C50.8 -232.5 101.6 -207 150.8 -172.7" style={{fill: "transparent", stroke: "#9cafb7", strokeWidth: "5px", rotate: "180deg"}} ></path></g></svg> */}
          
          <h1>{title}</h1>
        </div>
        <div className='description'>
          {description}
        </div>
        
        <div className='image'>
          <img src={img_src}></img>
        </div>
        <div className='page-content' dangerouslySetInnerHTML={{__html: content}}>
        </div>
      </div>

    </div>
  )
}