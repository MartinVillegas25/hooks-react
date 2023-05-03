import { useEffect, useState } from "react"
import { Message } from "./Message"



export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        username: 'Martin',
        mail: 'Martin@gmail.com'
    })

    const { username, mail } = formState

    const onInputChange = ({target}) => {
        const {name, value} = target

        setFormState({
            ...formState,
            [name]: value, //asi le digo q agarre el input que tenga ese name y lo cambie por el valor asignado
        })
    }
    

    //useEffect maneja efectos secundario

    useEffect(() => {
  
        console.log('SimpleForm')
      
    }, [formState])

    //cuando ponemos un arreglo vacio como dependecia, quiere decir que solo se dispara una vez
    

    return (
        <>
        <h1>SimpleForm</h1>
        <hr />

        <input 
        type="text" 
        name="username" 
        
        className="form-control"
        value={username}
        onChange={onInputChange}
        />
        <input 
        type="mail" 
        name="Username" 
    
        className="form-control mt-2"
        placeholder="martinvillegas90@gmail.com"
        value={mail}
        onChange={onInputChange}
        />

            {
                (username === "Martin") && <Message/>
            }
            
        </>
    )
}
