import '../App.css'
import { Link, Outlet } from 'react-router-dom';
import Nav from './Nav';
import { Icon } from '@iconify/react';

export default function About() {
  return (
    <div className="page" id="about">
      <Nav displayBack={true} />
      <svg className='blobs' viewBox="0 -10 900 600" width="1300" height="1300" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(440.95669168015354 290.0914119429407)"><path d="M150.8 -172.7C200 -138.4 247.7 -95.2 259.2 -43.7C270.6 7.8 245.7 67.6 211.9 118.6C178 169.6 135.2 211.6 81.6 236.6C27.9 261.5 -36.5 269.4 -78.9 242.7C-121.4 216.1 -141.9 154.9 -171.7 100.5C-201.5 46.1 -240.6 -1.6 -243.7 -53.3C-246.9 -104.9 -214.1 -160.5 -167.5 -195.2C-120.8 -230 -60.4 -244 -4.8 -238.3C50.8 -232.5 101.6 -207 150.8 -172.7" style={{fill: "#a29082", stroke: "#a29082", strokeWidth: "2px"}} ></path></g></svg>
      <svg className='blobs' viewBox="-5 0 200 200" width="950" height="950" xmlns="http://www.w3.org/2000/svg">
      <path id="blob2" style={{fill: "#9cafb7", stroke: "#9cafb7", strokeWidth: "2px"}} d="M36.6,-59.5C48.5,-49.4,59.7,-40.9,67.6,-29.2C75.4,-17.6,79.9,-2.7,76.7,10.2C73.5,23,62.7,34,52.8,46.4C43,58.9,34.3,73,22.6,75.9C10.9,78.9,-3.7,70.7,-18.6,65.4C-33.6,60.1,-48.8,57.8,-59.3,49.3C-69.7,40.9,-75.5,26.3,-78.1,11C-80.7,-4.3,-80.2,-20.3,-72.4,-31.2C-64.5,-42.1,-49.4,-47.8,-36.2,-57.1C-22.9,-66.5,-11.5,-79.6,0.5,-80.4C12.4,-81.1,24.8,-69.5,36.6,-59.5Z" transform="translate(100 100)" />
      </svg>
      <svg className='blobs' id="blob3" viewBox="-6 -20 900 600" width="1500" height="1500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(463.03535390731736 280.57594254713865)"><path d="M114.8 -136.7C145.5 -111 165.1 -71.8 180 -26C195 19.8 205.3 72.1 189.8 119.4C174.2 166.6 132.8 208.8 86 217.6C39.3 226.5 -12.7 202 -71.2 185.2C-129.7 168.4 -194.8 159.2 -215.5 124C-236.2 88.9 -212.7 27.8 -194 -26.6C-175.3 -81 -161.6 -128.6 -130.1 -154.2C-98.6 -179.8 -49.3 -183.4 -3.6 -179.1C42 -174.7 84 -162.4 114.8 -136.7" style={{fill: "#aac0aa", stroke: "#aac0aa", strokeWidth: "2px"}}></path></g></svg>

      <div className="page-wrapper">
        <div className="page-title">
          <h1>About</h1>
        </div>
        <div className='socials'>
          <ul>
            <li><a target="_blank" href="https://ibukiwasaki.com"><Icon icon="mingcute:web-line" /></a></li>
            <li><a target="_blank" href="mailto: ibukiwasaki@gmail.com"><Icon icon="mingcute:mail-send-line" /></a></li>
            <li><a target="_blank" href="https://linkedin.com/in/ibuki-iwasaki"><Icon icon="mingcute:linkedin-line" /></a></li>

          </ul>
        </div>
        <div className='page-content'>
          <div className="about-text">
            <p>Hi, and welcome to my blog! If you don't already know me, my name is Ibuki, and I design and code, among other things. You can check out my portfolio and learn more about me <a target="_blank" href='https://ibukiwasaki.com'>here</a>. <br></br><br></br> So why a blog? I go into more detail about it in my <Link to="/archive/getting-over-fears">first post</Link> but, as a serial overthinker, this is my endeavor to think less and do more. I'll mainly be using this as a platform to post some thoughts and experiments as they occur. This website itself started as an experiment to learn Three.js and React.<br></br><br></br>
            
            You might be wondering about the spaced out figure on the home page, which I've named Maru. It's based entirely on Felicia Chiao's "fleshy stick figure" that appears in most of her <a target="_blank" href='https://www.instagram.com/feliciachiao'>works</a>. It's a character I resonate with a lot, so I thought it would be a fitting vessel for my thoughts.
            <br></br><br></br>
            Thanks for checking this site out. If you have any thoughts or comments, I'd love to hear! Feel free to connect through my socials linked at the top.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  )
}
