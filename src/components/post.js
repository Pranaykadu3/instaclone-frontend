import "./post.css"

import like from "./images/likeicone.png"
import share from "./images/shareicone.png"
import Header from './Header';
import { useState } from "react";
const Post = ({ photos }) => {
  // const [arr,setArr] = useState(["Hello","My name is anuvrat","Beautiful view","life at"])
  return (
    <>
      <Header />
      <div id="bg">
        {photos.map(({ photo, _id }) => {
          return (
            <div key={_id} className="post">
              <section className="post-header">
                <div className="userdetail">
                  <span className="name">Siva</span>
                  <span className="city">Bengaluru</span>
                </div>
                <span className="dotes">...</span>

              </section>
              <section className="post-image">
                <img style={{ width: "100%", height: "240px" }} src={`http://localhost:5000/uploads/${photo}`} alt="postimage" />
              </section>
              <section className="postfooter">
                <span><img className="likeicon" style={{ width: "17px", height: "17px" }} src={like} alt="" /></span>
                <span><img className="shareicon" style={{ width: "17px", height: "17px" }} src={share} alt="" /></span>
                <span className="date">{(new Date()).toDateString()}</span>
                <span className="likecount" >64 likes</span>
                <p>My Beautiful World</p>
              </section>
            </div>
          )
        })}
      </div>

    </>
  )
}


export default Post