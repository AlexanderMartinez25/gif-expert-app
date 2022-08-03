import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "God of War"]);

  const onAddCategory = (newCategory) => {
    // no permitir valores duplicados
    if (categories.includes(newCategory)) return;
    // setCategories((categories) => [...categories, "Devil May Cry"]);
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {/* listado de gif */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      <ol>
        {categories.map((category) => {
          return <li key={category}> {category}</li>;
        })}
      </ol>
    </>
  );
};
