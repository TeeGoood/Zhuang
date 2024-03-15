import { useState } from "react"
import DeleteButton from "./DeleteButton"
import DeletePopUp from "./DeletePopUp"

const DeleteWrapper = (
    {name, url} : {
        name: string,
        url: string,
    }
) => {
    const [toggle, setToggle] = useState(false)

    return (  
        <>
            <DeleteButton setToggle={setToggle} />
            {toggle && <DeletePopUp name={name} url={url} setToggle={setToggle}/>}
        </>
    )
}
 
export default DeleteWrapper