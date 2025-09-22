import Link from "next/link";

export default function AuthorCard({ author, onDelete }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{author.name}</h3>
      <p>{author.description}</p>
      <p>
        <strong>Nacimiento:</strong> {author.birthDate}
      </p>
      {author.image && <img src={author.image} alt={author.name} width="100" />}
      <div>
        <Link href={`/editar/${author.id}`}>Editar</Link>
        <button onClick={() => onDelete(author.id)}>Eliminar</button>
      </div>
    </div>
  );
}
