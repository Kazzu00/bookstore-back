import { useState } from "react";

export default function AuthorForm({ initialData, onSubmit }) {
  const [form, setForm] = useState(
    initialData || { name: "", description: "", birthDate: "", image: "" }
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="birthDate"
        type="date"
        value={form.birthDate}
        onChange={handleChange}
        required
      />
      <input
        name="image"
        placeholder="URL Imagen"
        value={form.image}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Descripción"
        value={form.description}
        onChange={handleChange}
        required
      />
      <button type="submit">Guardar</button>
    </form>
  );
}
