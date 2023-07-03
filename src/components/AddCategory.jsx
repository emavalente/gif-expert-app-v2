import { useState } from "react";
import { toast } from "react-toastify";

const AddCategory = ({ onAddCategory, resetCategories }) => {
  const [inputValue, setInputValue] = useState("");

  // Validar el input y enviar el valor a onAddCategory
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.toUpperCase().trim()) {
      toast.error("Debes ingresar una búsqueda válida!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    onAddCategory(inputValue.toUpperCase().trim());
    setInputValue("");
  };

  return (
    <form className="busqueda" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        placeholder="Ingresa una búsqueda de GIFs"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>
        <ion-icon name="search-outline"></ion-icon>
      </button>
      <button type="button" className="reset-btn" onClick={resetCategories}>
        Reset
      </button>
    </form>
  );
};

export default AddCategory;
