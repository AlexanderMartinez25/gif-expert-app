import { useState } from "react";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'God of War']);

    const onAddCategory =  () => {
        setCategories(categories =>[...categories , 'Devil May Cry']);
    }
    
    return(
        <>
            <h1>GifExpertApp</h1>
            <button onClick={onAddCategory} >Agregar</button>

            <ol>
                {
                    categories.map( category =>{
                        return <li key={category}> {category}</li>
                    })
                }
                
            </ol>
        </>
    )
}