import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GridGif } from './components/GridGif';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['God of War']);

  const onAddCategory = (newCategory) => {
    // no permitir valores duplicados
    if (categories.includes(newCategory)) return;
    // setCategories((categories) => [...categories, "Devil May Cry"]);
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {categories.map((category) => (
        <GridGif id={category} key={category} category={category} />
      ))}
    </>
  );
};
