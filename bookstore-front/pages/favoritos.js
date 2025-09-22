import Link from "next/link";
import { useAuthorsContext } from "../context/AuthorsContext";
import AuthorCard from "../components/AuthorCard";

export default function FavoritosPage() {
  const { authors, favorites } = useAuthorsContext();

  const favoritosList = authors.filter((a) => favorites.includes(a.id));

  return (
    <div>
      <h1>Autores Favoritos</h1>
      <Link href="/authors">Volver a la lista completa</Link>
      <div>
        {favoritosList.length === 0 ? (
          <p>No hay autores favoritos.</p>
        ) : (
          favoritosList.map((a) => <AuthorCard key={a.id} author={a} />)
        )}
      </div>
    </div>
  );
}
