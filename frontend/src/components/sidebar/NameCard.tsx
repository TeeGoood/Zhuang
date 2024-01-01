import React from "react";

interface nameCardProps{
    name: string;
    isActive: boolean;
}

const NameCard : React.FC<nameCardProps> = ({name, isActive}) => {
    return (  
        <div className= {`p-2 pl-7 rounded-full text-lg hover:bg-primary-light hover:text-primary-normal transition ${isActive && "bg-primary-normal text-white font-semibold"}`}>
            {name}
        </div>
    );
}
 
export default NameCard;