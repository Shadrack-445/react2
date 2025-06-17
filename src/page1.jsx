import { useState } from "react";
import { useNavigate } from "react-router-dom";




function Page1(){
    const [FormData,setFormData] = useState({name:"" ,age:""})
const handlechange = () => {
    FormData.name = () => {setFormData(e)=(e.target.value)}
    FormData.age = () => {parseFloat(setFormData(e)=(e.target.value))}  
}

const navigate = useNavigate()
const next = () => {
    navigate("/page2");
}
    return(
       <>
        <Form>
            <input type="text" 
            placeholder="Enter your name"
            value={FormData.name}
            onChange={handlechange}/>
            <br />
            <span>Age:</span><input type="number"
            value={FormData.age}
            onChange={handlechange}/>
        </Form>
        <button onClick={next}>Next</button>
         </>
    )
} 

export default Page1
