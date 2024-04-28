import { Navbar } from "./Navbar";
import axios from "axios";

export function AddTodos(){
    
    return(
        <>
        <Navbar />
            <div className="card w-1/3 h-1/2">
            <div className="input flex flex-col">
                <input type="text" placeholder="Enter the Task"></input>
                <input type="text" placeholder="Enter the Task Description"></input>
            </div>
            <div className="buttons flex flex-row justify-between align-middle w-1/3">
                <button>Add</button>
                <button >Clear</button>
            </div>
                
            </div>
        </>
    )
}