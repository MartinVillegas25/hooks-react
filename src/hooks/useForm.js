// lo q hacemos es crear un custom hook para poder manejar todos los  formularios, de manera de q no haga falta repetir codigo cada vez

import { useState } from "react"



//lo hago de manera generica, q los datos ingresados o que se necesiten para el armado del form no esten predefinidos


export const useForm = (initialForm = {}) => {
  
    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({target}) => {
        const {name, value} = target

        setFormState({
            ...formState,
            [name]: value, //asi le digo q agarre el input que tenga ese name y lo cambie por el valor asignado
        })
    }
  
  
    return {
        ...formState, // asi lo q hago es q retorno una desustructuracion del form, no importa lo q sea
        formState,
        onInputChange
    }
    
  
}
