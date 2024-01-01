import { Icon } from "@iconify/react/dist/iconify.js";

const SearchBar = () => {
    return (  
        <div className="relative flex items-center mb-2">
            <input type="text" className="bg-primary-light rounded-md text-lg w-full py-1 px-4 outline-none pl-12 hover:bg-primary-soLight transition"/>
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