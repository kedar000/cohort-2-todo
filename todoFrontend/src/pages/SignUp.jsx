import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import axios from "axios";
import { useState } from "react";

export function SignUp(){
    
    const [userName , setUsername] = useState("");
    const [userEmail , setUseremail] = useState("");
    const [userPassword , setUserpassword] = useState("");


    const navigate = useNavigate();
    const back = ()=>{
        navigate("/Login");

    }
     async function userData (username , email , password ){
        try {
            const userdataArray = [username , email , password];
            const response= await axios.post("/userSignup" , {inputDataArray : userdataArray});
            console.log(response);
        } catch (error) {
            console.log("there is an error in frontend userdata req " , error);
        }
    }

    return(
        <>
            <Navbar />
            <div className="container flex flex-col">
                <div>SignUp</div>
                <div className="flex flex-col ">
                    <input type="text" value={userName} placeholder="Enter The Username"></input>
                    <input type="email" value={userEmail} placeholder="Enter The Email Address"></input>
                    <input type="text" value={userPassword} placeholder="Enter The Password"></input>
                </div>
                <div className="felx  w-1/3 flex-row justify-between">
                    <button  className="px-5">signUp</button>
                    <button onClick={back}>Back</button>
                </div>

            </div>
        </>
    )
}