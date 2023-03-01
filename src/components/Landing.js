import { NavLink } from "react-router-dom";
import "./landing.css";
const Landing = () => {
  return (
    <div className="page">
      <div className="image">
        <img
          style={{ height: "100%", width: "100%" }}
          src="https://blogsmedia.lse.ac.uk/blogs.dir/30/files/2020/04/Instagram-image.png"
          alt=""
        />
      </div>
      <div className="wel">
        <p className="welcome">
          <b>WELCOME!!</b>
        </p>
        <p className="text">TO INSTAGRAM CLONE</p>
        <NavLink to="/post">
          <button>Enter</button>
        </NavLink>
      </div>
    </div>
  );
};
export default Landing;
