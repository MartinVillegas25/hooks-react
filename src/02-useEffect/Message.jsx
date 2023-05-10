import { useEffect } from "react"


export const Message = () => {

    useEffect(() => {
      //aca va el callback
    
      return () => {
        //aca va el codigo q se ejecuta cuando se limpia, por ejemplo  es cuando se oculta el mensaje por no pasar la condicion

        // para remover el evento se debe trabajar bajo referencia , no sirve si declaramos la funcion dentro del eventListener
      }
    }, [])
    
    
    
    
    return (
        <>
            <h3>usuario ya existe</h3>
        </>
    )
}
