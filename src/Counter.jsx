import { useState } from "react" // hookes

const Counter =()=>{
    
 /// counterState, is use for assign value and  setCounterState is function which os used to modefy the value
    
   const [counterState, setCounterState] = useState(()=>{   
          return { counter :10, tittle :"Fun" }
   })

//    increment function 
 const increment =()=>{
    setCounterState((prevstate)=>{
        return {...prevstate, counter: counterState.counter + 1}
    });
 }

 //    decrement function 
 const decrement =()=>{
    setCounterState((prevstate)=>{
        return {...prevstate, counter : counterState.counter - 1}
    });
 }

    return (
        <div className=" col-12 col-md-4 offset-md-4 border text-white">
            <span className="h2 pt-4 m-2 text-white-50 "> {counterState.tittle} Counter</span> <br />
            <button className="btn btn-success m-1" onClick={increment}>+1</button>
            <button className="btn btn-danger m-1" onClick={decrement}>-1</button> <br />
            <span className="h4">
                Counter: {" "}
                <span className="text-success ">{counterState.counter}</span>

            </span>

        </div>

    )

}

export default Counter