import { useCounter } from "../hooks/useCounter"




export const CounterWithCustomHook = () => {

    //creat un custom hook
    const {counter, increment, decrement, reset} = useCounter();
 


  return (
    <>

        <h1>Counter with Cutom Hook : {counter}</h1>
        <hr />


        <button onClick={
             increment
        } className="btn btn-primary" >+1</button>
        <button className="btn btn-danger" onClick={
             reset
        }>Reset</button>
        <button className="btn btn-primary" onClick={
             decrement
        }>-1</button>    
    </>
  )
}
