import { useState } from 'react';
import { AddCategory, GridGif } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['God of War']);

  const onAddCategory = (newCategory) => {
    // no permitir valores duplicados
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
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
