import Image from "next/image";
import { RiArrowGoBackFill } from "react-icons/ri";
import Link from "next/link";

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { next: { revalidate: 60 } }
  );
  const res = await data.json();
  console.log(res);

  return (
    <>
      <Link href="/" className="flex justify-center items-center m-24 mx-auto">
        <div className="text-slate-200 w-4 h-4">
          <RiArrowGoBackFill className="w-full h-full" />
        </div>
        <h2 className="px-4 py-2 text-lg text-slate-200">Back to Homepage</h2>
      </Link>
      <div className="sm:flex p-8 max-w-5xl mx-auto justify-center items-center gap-12">
        <div>
          <Image
            className="rounded-lg"
            src={imagePath + res.poster_path}
            width={800}
            height={800}
            priority
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">{res.title}</h2>
          <div className="flex-col sm:block justify-start items-center gap-4 sm:gap-2 font-sm text-slate-200">
            <h2>{res.release_date}</h2>
            <span>
              {res.genres.map((genre) => (
                <span key={genre.id}> {genre.name} </span>
              ))}
            </span>

            <h2>{res.runtime} minutes</h2>
          </div>
          <h2
            className={`text-2xl font-bold ${
              res.vote_average >= 7.5 ? "text-green-500" : "text-yellow-500"
            }`}
          >
            {Math.floor(res.vote_average * 10)}% User Score
          </h2>

          <div className="pb-12">
            <h2 className="font-bold text-xl mb-2">Overview</h2>
            <p>{res.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}
