import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";


export function Home(){
    const navigate = useNavigate();
    return(
        <>
            <Navbar />
            <div className="todoContent">
                <p>"Introducing our Todo application, your ultimate productivity companion. With intuitive task management, customizable lists, and seamless organization, stay on top of your agenda effortlessly. Prioritize tasks, set deadlines, and enjoy a streamlined workflow. Experience productivity redefined with our user-friendly interface and powerful features."</p>

            </div>
            <div className="buttons px-auto flex flex-row  justify-between ">
                <div className=" px-auto w-1/3 flex justify-between ">
                    <button onClick={()=>{
                        navigate("/addTodos")
                        console.log("called the AddTodos")
                    }}> Add Todo</button>
                    <button> Show Todos</button>
                </div>
            </div>
        </>
    )
}