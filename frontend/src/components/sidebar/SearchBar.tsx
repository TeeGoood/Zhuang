import { Icon } from "@iconify/react/dist/iconify.js";
import { ChangeEvent } from "react";

const SearchBar = ({setKeyword} : {setKeyword : React.Dispatch<React.SetStateAction<string>>}) => {
    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setKeyword(() => value);
    }

    return (  
        <div className="relative flex items-center mb-2">
            <input 
                type="text" 
                className="bg-primary-light rounded-md text-md w-full py-1 px-4 outline-none pl-12 hover:bg-primary-soLight transition"
                onChange={(e) => handleChange(e)}
            />
            <Icon 
                icon="ic:round-search" 
                color="#081132"
                width={30}
                height={30} 
                className="absolute ml-2"/>
        </div>
    );
}
 
export default SearchBar;