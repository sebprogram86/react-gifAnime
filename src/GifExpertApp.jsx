import React, { useState } from 'react'
import { AddCategory ,GifGrid} from './components'




export const GifExpertApp = () => {

  const [categories , setCategories] = useState(['Dragon ball'])

  const onAddCategory = (newCategory) => {

   if(categories.includes(newCategory))return;
    
    setCategories([newCategory,...categories])
    
  }

  return (
    <>
       
        <h1>Gif Expert</h1>

       
        <AddCategory 
        
        onNewCategory = {(evt) => onAddCategory(evt)}
        />
                
                
            {
                categories.map((categoria) => (
                        
                        <GifGrid 
                            key={categoria} 
                            category={categoria}
                        />
                    )
                )
            }
               

                
    </>
  )
}


