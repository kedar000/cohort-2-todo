import { useNavigate } from "react-router-dom"

export function Navbar(){
    const navigate = useNavigate();
    return(
        <>
            <nav>
                <ul className="flex justify-between px-5 py-6 bg-red-200 ">
                    <li><button onClick={()=>{
                        navigate("/")
                    }}>Logo</button></li>
                    <li><button onClick={()=>{
                        navigate("/Login")
                    }} >Login</button></li>
                </ul>
            </nav>
        </>
    )
}