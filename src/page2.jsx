import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Page2(){
    const [FormInfor,setFormInfor] = useState({email:"" ,mobile:""})
const handlechange = () => {
    FormInfor.email = () => {setFormInfor(e)=(e.target.value)}
    FormInfor.mobile = () => {parseFloat(setFormInfor(e)=(e.target.value))} 
}

const navigate = useNavigate()
const next = () => {
    navigate("/page3");
}
    return(
        <>
        <form>
            <span>Email:</span><input type="email" 
            placeholder="Enter your email"
            onChange={handlechange}
            value={FormInfor.email}/>
            <br />
            <span>Phone:</span><input type="number" 
            onChange={handlechange}
            value={FormInfor.mobile}/>
        </form>
        <button onClick={next}>Next</button>
        </>
    )
}
export default Page2
