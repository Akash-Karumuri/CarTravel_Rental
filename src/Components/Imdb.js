import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Imdb = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get(`https://omdbapi.com/?s=fast%20and%20furious&apikey=1c0fb98`)
            .then((res) => setMovie(res.data.Search))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Fast and Furious</h1>
            <div className="row g-4">
                {
                    movie.map((movie, index) => (
                        <div key={index} className="col-md-3">
                            <div className="card h-100 shadow">
                                <img
                                    src={movie.Poster}
                                    alt={movie.Title}
                                    className="card-img-top"
                                    style={{ height: '300px', objectFit: 'cover' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-truncate" title={movie.Title}>
                                        {movie.Title}
                                    </h5>
                                    <p className="card-text mb-1"><strong>Year:</strong> {movie.Year}</p>
                                    <p className="card-text"><strong>Type:</strong> {movie.Type}</p>
                                    <a
                                        href={`https://www.imdb.com/title/${movie.imdbID}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary mt-auto"
                                    >
                                        View on IMDB
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Imdb;
