import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    
    const [inputValue, setInputValue] = useState();

    const onInputChange = (evt) => {
        
        setInputValue(evt.target.value)
    }

    const onEnviar = (evt) => {
        
        evt.preventDefault()

        if(inputValue.trim().length <= 1)return;

        // onAddCategory(categories => [inputValue , ...categories])
        onNewCategory(inputValue.trim())
        setInputValue('')
    }


  return (
    <>
        <form onSubmit={ (evt) => onEnviar(evt) }>

            <input 
            type="text" 
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange={(evt) => onInputChange(evt) } 
            
            />


        </form>
       
    </>
  )
}


