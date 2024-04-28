import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

export function Login(){
    const navigate = useNavigate();
    const signup =()=>{
        navigate("/SignUp");
    }
    return (
        <>
        <Navbar />
            <div>
                <div className="flex flex-col ">
                    <input type="email" placeholder="Enter The Email"></input>
                    <input type="text" placeholder="Enter The Password"></input>
                </div>
                <div className="flex flex-col justify-between ">
                    <button>Login</button>
                    <p>Create a New Account <button onClick={signup}>SignUp</button></p>
                </div>
            </div>
        </>
    )
}
