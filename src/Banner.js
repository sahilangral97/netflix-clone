import React, {useState, useEffect} from 'react';
import axios from './axios';
import request from "./request";
import "./Banner.css"

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() =>{
        async function fetchdata(){
            const data = await axios.get(request.fetchNetflixOriginals) 
            console.log(request.fetchNetflixOriginals)
            setMovie(
                data.data.results[
                    Math.floor(Math.random() * data.data.results.length -1)   
                ]
            );
            return request;
        }
        fetchdata();
    }, []);

    function truncate(str){
        return str?.length > 150 ? str.substr(0,149) + "..." : str; 
    }

    console.log(`hello ${movie}`);

    return(
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }}
        
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <button className="banner_buttons">
                    Play
                </button>
                <button className="banner_buttons">
                    My List
                </button>
                <h1 className="banner_description">
                    {truncate(movie?.overview)}
                </h1>
            </div>
            <div className = "banner_fadeBottom"/>
        </header>
    )
}

export default Banner;
