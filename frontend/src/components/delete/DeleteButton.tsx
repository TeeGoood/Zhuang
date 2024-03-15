import { Icon } from "@iconify/react/dist/iconify.js"

const DeleteButton = (
    {setToggle} : {
        setToggle : React.Dispatch<React.SetStateAction<boolean>>
    }
) => {
    return (  
        <button 
            className="flex items-center gap-2 hover:bg-primary-light transition px-2 py-1 rounded-lg"
            onClick={() => setToggle(true)}
        >
            <span>ลบ</span>
            <Icon icon="mdi:bin"  className="w-6 h-6"/>
        </button>
    )
}
 
export default DeleteButton