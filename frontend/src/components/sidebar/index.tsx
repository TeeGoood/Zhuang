import NameCard from "./NameCard";
import { Icon } from '@iconify/react';
import SearchBar from "./SearchBar";

const SideBar = () => {
    const nameList = [
        {
            name:"Tee",
            isActive: true
        },
        {
            name:"Tingting",
            isActive: false
        },
        {
            name:"K",
            isActive: false
        },
        {
            name:"Putt",
            isActive: false
        },
        {
            name:"Tee",
            isActive: false
        },
        {
            name:"Tingting",
            isActive: false
        },
        {
            name:"K",
            isActive: false
        },
        {
            name:"Putt",
            isActive: false
        },
    ]

    return (  
        <div className="w-64 px-7 py-5 h-full border-r border-r-primary-light">
            <h1 className="text-3xl font-bold mb-7 flex items-center gap-3">
                <span className="text-primary-normal">Students</span>
                <Icon 
                    icon="ph:student" color="#3559E0" 
                    width={30} 
                    height={30}/>
            </h1>
            <SearchBar />
            {
                nameList.map(({name, isActive}) => {
                    return (
                        <NameCard name={name} isActive={isActive} />
                    );
                })
            }
        </div>
    );
}
 
export default SideBar;