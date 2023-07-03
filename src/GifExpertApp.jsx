import { useState } from "react";
import { generarId } from "./helpers";
import { ToastContainer, toast } from "react-toastify";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  // hook que contiene el estado de las categorias escogidas.
  const [categories, setCategories] = useState([]);

  const onAddCategory = (category) => {
    if (categories.includes(category)) {
      toast.warning("La búsqueda ya se encuentra activa", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    setCategories([category, ...categories]);
  };

  const resetCategories = () => {
    setCategories([]);
  };

  return (
    <>
      {/* Titulo */}
      <div className="title">
        <h1>GifyExpertApp</h1>
        <a href="https://linkedin.com/in/emanuel-valente">
          <span>by Emanuel Valente</span>
        </a>
      </div>

      {/* Input de Búsqueda */}
      <AddCategory
        onAddCategory={onAddCategory}
        resetCategories={resetCategories}
      />

      {/* Lista de Resultados */}
      <div>
        {categories.map((category) => (
          <GifGrid key={generarId()} category={category} />
        ))}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default GifExpertApp;
