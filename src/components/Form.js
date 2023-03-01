import "./form.css"
import axios from "axios"
import { NavLink } from "react-router-dom"

 const Form=({setUpdateUI})=>{
   
  const handleChange = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", e.target.files[0]);

    axios
      .post("http://localhost:5000/api/save", formData)
      .then((res) => {
        console.log(res.data);
        setUpdateUI(res.data._id);
      })
      .catch((err) => console.log(err));
  };

   return(
  
    <div className="form">
  
  <input className="fileinput" type="file" id="fileupload" name="file_picker" onChange={(e)=> handleChange(e)}  />
  <div className="auther-location">
  <input className="auther" type="text" />
   <input className="location" type="text" />
  </div>
   
   <input className="desci" type="text" />
   <NavLink to="/post"><button className="postbtn">POST</button></NavLink>
    </div>
    )


 }
 export default Form