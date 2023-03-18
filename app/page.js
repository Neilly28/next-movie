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
    <main className={styles.main}>
      <h1 className="text-4xl font-bold">Hello from Next 13!🔥</h1>
      <div className="grid grid-cols-3 gap-12">
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
