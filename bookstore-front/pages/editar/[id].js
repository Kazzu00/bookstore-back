import { useRouter } from "next/router";
import useAuthors from "../../hooks/useAuthors";
import AuthorForm from "../../components/AuthorForm";

export default function EditarAutor() {
  const router = useRouter();
  const { id } = router.query;
  const { authors, updateAuthor } = useAuthors();

  const author = authors.find((a) => a.id === parseInt(id));

  const handleSubmit = async (data) => {
    await updateAuthor(author.id, data);
    router.push("/authors");
  };

  if (!author) return <p>Cargando</p>;

  return (
    <div>
      <h1>Editar Autor</h1>
      <AuthorForm initialData={author} onSubmit={handleSubmit} />
    </div>
  );
}
