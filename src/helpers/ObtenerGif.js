


export const obtenerGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=rV829apOckvrFnvWir4Q0hjdMD3HcHIs&q=${category}&limit=10`;

    const resp = await fetch(url);
    const { data } = await resp.json();
   
    const gifs = data.map(data => ({

        id : data.id,
        titulo : data.title,
        url : data.images.downsized_medium.url


    }))

    

    return gifs;
}
