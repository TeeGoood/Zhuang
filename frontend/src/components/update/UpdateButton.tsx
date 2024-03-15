import { Icon } from "@iconify/react/dist/iconify.js"

const UpdateButton = ({setToggle} : {
        setToggle : React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const handleButtonClicked = () => {
        setToggle(true)
    }
    
    return (  
        <button>
            <Icon 
                icon="pepicons-pencil:pen" 
                color="#3559e0"
                className="hover:bg-primary-light rounded-full w-7 h-7 p-1 transition cursor-pointer" 
                onClick={handleButtonClicked}
            />
        </button>
    )
}
 
export default UpdateButton