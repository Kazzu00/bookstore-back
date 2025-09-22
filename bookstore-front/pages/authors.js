import Link from "next/link";
import { useAuthorsContext } from "../context/AuthorsContext";
import AuthorCard from "../components/AuthorCard";

export default function AuthorsPage() {
  const { authors } = useAuthorsContext();

  return (
    <div>
      <h1>Autores</h1>
      <Link href="/crear">Crear Autor</Link> | <Link href="/favoritos">Favoritos</Link>
      <div>
        {authors.map((a) => (
          <AuthorCard key={a.id} author={a} />
        ))}
      </div>
    </div>
  );
}

