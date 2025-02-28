import { useEffect, useState } from "react";
import { obtenerGifs } from "../helpers/ObtenerGif";


/**Esto es la estructura de un hook */
export const useFetchGifs = (category) => {

    const [ images , setImagen ] = useState([]);
    const [isLoading,setIsLoading] = useState(true)

    const pasarImagenes = async() => {

    const newImages = await obtenerGifs(category);
       setImagen(newImages);
       setIsLoading(false)

     }


       useEffect(()=>{
           pasarImagenes();
       },[])

    return {

        images: images,
        isLoading : isLoading
       

    }
 
}


