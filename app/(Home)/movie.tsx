"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./movie.module.css";

interface MovieProps{
  readonly id: string;
  readonly poster_path: string;
  readonly title: string;
}

export default function Movie({id, poster_path, title}) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`)
  }
  return (
    <div key={id} className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  )
}