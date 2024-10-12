import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
      <h3>{ category }</h3>

      {
        // React no renderiza Boolean y null, por lo que solo renderiza el html si el boleano está en true.
        isLoading && (<h2>Cargando...</h2>)
      }
      

      <div className='card-grid'>
        {
          images.map( (image) => (
            <GifItem
              key = { image.id }
              { ...image }
            />
          ))
        }
        {/* {
          images.map( image => {
            return <li key={ image.id }>${image.title}</li>
          })
        } */}
      </div>
    </>
  )
}
