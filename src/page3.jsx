import Page1 from "./page1";
import Page2 from "./page2";

function Page3(){
    return(
        <>
        <span>{`Name: ${FormData.name}`}</span>
        <span>{`Age: ${FormData.age}`}</span>
        <span>{`Email: ${FormInfor.email}`}</span>
        <span>{`Mobile: ${FormInfor.mobile}`}</span>
        <br />
        <button onClick={alert("Details confirmed")}>Confirm</button>
        </>
    )
}
export default Page3