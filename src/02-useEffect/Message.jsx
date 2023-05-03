import { useEffect } from "react"


export const Message = () => {

    useEffect(() => {
      //aca va el callback
    
      return () => {
        //aca va el codigo q se ejecuta cuando se limpia, por ejemplo  es cuando se oculta el mensaje por no pasar la condicion
      }
    }, [])
    
    
    
    
    return (
        <>
            <h3>usuario ya existe</h3>
        </>
    )
}
