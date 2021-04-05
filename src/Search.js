import React, { useState } from 'react';
import axios from "axios";

const Search = () => {

  const [photo, setphoto] = useState("");
  const [apis, setapis] = useState("0SuRMzRF6wSDIUN3U-SphKQdJr7KzjpHoD8unJOtVtA")

  const inP = (e) => {
      setphoto(e.target.value);
  }

  const [out, setout] = useState([])

  const hanD = (e) => {
      e.preventDefault();
      console.log(photo);
      const url = "https://api.unsplash.com/search/photos?pages=1&query="+photo+"&client_id="+apis;
      // const url = "https://api.unsplash.com/search/photos?limit=4&query="+photo+"&client_id="+apis;

      axios.get(url).then((response) => {
          console.log(response);
          setout(response.data.results)
      })

  }

  return (
    <>
    <div className="container mt-5">
    <div>
    <h1>Name : <span className="badge badge-secondary">Ankit Upadhyay</span></h1>
    <h1>Email : <span className="badge badge-secondary">ankitup889@gmail.com</span></h1>
    </div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Search Image</label>
          <input
            type="text"
            className="form-control"
            onChange={inP}
            placeholder="Type here"
          />
        </div>
        <button onClick={hanD} type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
      
      <div className="App">
        {
            out.map((photo , i) => (
                <img key={i} src={photo.urls.thumb} alt="bad" />
            ))
        }
      </div>
    </div>
    </>
  );
};

export default Search;
