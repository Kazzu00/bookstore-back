import { createContext, useContext, useState, useEffect } from "react";

const AuthorsContext = createContext();

export function AuthorsProvider({ children }) {
  const [authors, setAuthors] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const API_URL = "http://localhost:8080/api/authors";

  // Obtener autores del backend
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setAuthors(data))
      .catch((err) => console.error("Error al obtener autores:", err));
  }, []);

  // CRUD
  const addAuthor = async (author) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(author),
    });
    const newAuthor = await res.json();
    setAuthors([...authors, newAuthor]);
  };

  const updateAuthor = async (id, author) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(author),
    });
    const updated = await res.json();
    setAuthors(authors.map((a) => (a.id === id ? updated : a)));
  };

  const deleteAuthor = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setAuthors(authors.filter((a) => a.id !== id));
    setFavorites(favorites.filter((fid) => fid !== id)); // limpiar si era favorito
  };

  // Favoritos
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <AuthorsContext.Provider
      value={{ authors, favorites, addAuthor, updateAuthor, deleteAuthor, toggleFavorite }}
    >
      {children}
    </AuthorsContext.Provider>
  );
}

export function useAuthorsContext() {
  return useContext(AuthorsContext);
}
