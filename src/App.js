
import './App.css';
import Post from "./components/post"
import Form from "./components/Form"
import Landing from './components/Landing';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [photos, setPhotos] = useState([])
  const [updateUI, setUpdateUI] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/get")
      .then((res) => {
        console.log(res.data);
        setPhotos(res.data);
      })
      .catch((err) => console.log(err));
  }, [updateUI]);
  // console.log(photos)

  return (



    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path='/post' >
          <Post photos={photos} />
        </Route>
        <Route path='/upload'>
          <Form setUpdateUI={setUpdateUI} />
        </Route>
      </Switch>
    </BrowserRouter>






  );
}

export default App;
