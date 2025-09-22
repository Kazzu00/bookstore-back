import Link from "next/link";
import { useAuthorsContext } from "../context/AuthorsContext";
import styles from "../styles/Card.module.css";

export default function AuthorCard({ author }) {
  const { deleteAuthor, favorites, toggleFavorite } = useAuthorsContext();
  const isFavorite = favorites.includes(author.id);

  return (
    <div className={styles.card}>
      <h3>
        {author.name} {isFavorite && " Favorito"}
      </h3>
      <p>{author.description}</p>
      <p><strong>Nacimiento:</strong> {author.birthDate}</p>
      {author.image && <img src={author.image} alt={author.name} width="120" />}
      
      <div className={styles.actions}>
        <Link href={`/editar/${author.id}`}>
          <button className={`${styles.button} ${styles.edit}`}>Editar</button>
        </Link>
        <button
          className={`${styles.button} ${styles.delete}`}
          onClick={() => deleteAuthor(author.id)}
        >
          Eliminar
        </button>
        <button
          className={`${styles.button} ${styles.favorite}`}
          onClick={() => toggleFavorite(author.id)}
        >
          {isFavorite ? "Quitar Favorito" : "Agregar Favorito"}
        </button>
      </div>
    </div>
  );
}

