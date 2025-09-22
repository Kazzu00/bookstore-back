import Link from "next/link";
import useAuthors from "../hooks/useAuthors";
import AuthorCard from "../components/AuthorCard";

export default function AuthorsPage() {
  const { authors, deleteAuthor } = useAuthors();

  return (
    <div>
      <h1>Autores</h1>
      <Link href="/crear">Crear Autor</Link>
      <div>
        {authors.map((a) => (
          <AuthorCard key={a.id} author={a} onDelete={deleteAuthor} />
        ))}
      </div>
    </div>
  );
}
