

export const GifItems = (props) => {
    console.log(props)
    const {titulo,url} = props;
    
  return (
    <div className="card">
        <p>{titulo}</p>
        <img src={url} alt="" />
        
        
     
    </div>
  )
}


