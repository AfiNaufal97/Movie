import './App.css';
import {useEffect, useState} from "react";
import {getMovie, searchMovie} from "./api";

const App = () => {

    const [listMovie, setListMovie] = useState([]);

    useEffect(() => {
        getMovie().then((res) => setListMovie(res)).catch((e) => console.log(e));
    }, [])

    const ViewMovie = () => {
        return listMovie.map((movies, i) => <div className="Movie-wrapper" key={i}>
                <div className="Movie-title">{movies.title}</div>
                <img className="Movie-image" alt={"gambar"} src={`${process.env.REACT_APP_BASEIMGURL}/${movies.poster_path}`}/>
                <div className="Movie-date">realese {movies.release_date}</div>
                <div className="Movie-rate">{movies.vote_average}</div>
            </div>)

    }

    const search = async (q)=>{
        if(q.length > 3){
            let res = await searchMovie(q)
            setListMovie(res)
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <input placeholder="cari judul film" className="Movie-search" onChange={({target})=> search(target.value)}/>
                <div className="Movie-container">
                    <ViewMovie />
                </div>

            </header>
        </div>
    );
}

export default App;
