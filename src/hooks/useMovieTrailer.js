import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch();
    const getMovieVideos = async () =>{
        // https://api.themoviedb.org/3/movie/976573/videos?language=en-US';
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US'
        ,API_OPTIONS)
        const json = await data.json();
        // console.log(json);
        
        const filterData = json.results.filter((video) => video.type === "Trailer");
        console.log(filterData);
        const trailer = filterData===undefined ? filterData[0] : json.results[0];
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() =>{
        getMovieVideos();
    },[])
}

export default useMovieTrailer;