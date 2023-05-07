import axios from 'axios'

export const getMovie = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BASEURL}/movie/popular?page=1`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
        }
    });

    return res.data.results
}

export const searchMovie = async (q) => {
    const res = await axios.get(`${process.env.REACT_APP_BASEURL}/search/movie?page=1&query=${q}`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
        }
    });
    return res.data.results
}


