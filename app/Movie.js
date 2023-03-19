import Image from "next/image";
import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";

export default function Movie({ title, id, poster_path, release_date }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div className="bg-black rounded-lg">
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          width={400}
          height={400}
          alt={title}
          className="flex rounded-t-lg hover:scale-105 transition-all"
        />
        <div className="text-slate-100 p-8 text-center flex flex-col gap-4">
          <h1 className="font-bold text-2xl">{title}</h1>
          {/* <h2 className="font-medium text-sm">Release Date: {release_date}</h2> */}
        </div>
      </Link>
    </div>
  );
}
