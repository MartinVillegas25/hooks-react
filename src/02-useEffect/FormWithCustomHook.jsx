import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"




export const FormWithCustomHook = () => {
    
    const {formState, onInputChange, username , mail, password }= useForm({
        username: '',
        mail: '',
        password: '',
     
    });


    // const { username , mail, password } = formState;

    
    

    //useEffect maneja efectos secundario

    useEffect(() => {
  
        console.log('FormWithCustomHook')
      
    }, [])

    //cuando ponemos un arreglo vacio como dependecia, quiere decir que solo se dispara una vez
    

    return (
        <>
        <h1>FormWithCustomHook</h1>
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
       name="mail" 
       className="form-control mt-2"
       placeholder="martinvillegas90@gmail.com"
       value={mail}
       onChange={onInputChange}
       />

        <input 
        type="password"  
        name="password"  
        className="form-control mt-2"
        placeholder="password"
        value={password}
        onChange={onInputChange}
        />

            
        </>
    )
}
