import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "God of War"]);

  const onAddCategory = () => {
    setCategories((categories) => [...categories, "Devil May Cry"]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory />

      {/* listado de gif */}
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}> {category}</li>;
        })}
      </ol>
    </>
  );
};
