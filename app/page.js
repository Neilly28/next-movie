"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
// import Movie from "./about/Movie";
import Movie from "./Movie";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [movies, setMovies] = useState([]);

  const fetchMovie = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const res = await data.json();
    console.log(res.results);
    setMovies(res.results);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <main className="max-w-7xl mx-auto p-0 sm:p-12 flex flex-col justify-center items-center">
      <div className="p-4 text-center">
        <h1 className="text-7xl font-bold text-red-600 mb-4">Next-Movie</h1>
        <h1 className="text-lg font-semibold text-slate-300 mb-24">
          The most popular movies right now
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {movies?.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
