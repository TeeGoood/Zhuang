import { Icon } from "@iconify/react/dist/iconify.js";
import { FC, useEffect, useState } from "react";
import { classes } from "../../types";
import axios from "axios";

interface ClassRowProps{
    classId : String;
    order : number;
}

const ClassRow : FC<ClassRowProps> = ({classId, order}) => {
    const [isChecked, setIsChecked] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [classData, setClassData] = useState<classes>();
    const classUri : string = `${import.meta.env.VITE_API_DOMAIN}/classes/${classId}`

    useEffect(() => {
        fetchClass(classUri);
    },[]);

    const fetchClass = async (uri:string) => {
        try{
            const response = await axios.get(uri);
            const data = response.data[0];
            data.date = new Date(data.date);
            setClassData(() => data);
            setIsChecked(() => data.paid);
        }
        catch(err){
            console.log(err);
        }
    }


    const handdleCheck = async (event : any) => {
        event.stopPropagation();
        const value = !isChecked;
        try{
            const response = await axios.put(classUri, {paid : value});
            console.log(response);
        }
        catch(err){
            console.log(err);
        }
        setIsChecked(value);
    }

    return (
        <> 
            {classData &&
                <>
                    <tr className="hover:bg-primary-soLight transition" onClick={() => setToggle(!toggle)}>
                        <td>
                            {order}
                        </td>
                        <td className="p-2">
                            {
                                `${classData.date.getDate()}/${classData.date.getMonth()+1}/${classData.date.getFullYear()}`
                            }
                        </td>
                        <td className="w-[300px] line-clamp-1 pt-2">
                            {classData.note}
                        </td>
                        <td className={`text-center ${isChecked ? "text-approval-normal" : "text-danger-normal"}`}>
                            {isChecked ? "เรียบร้อย" : "ไม่เรียบร้อย"}
                        </td>
                        <td>
                            <div className="relative w-6 h-6">
                                <input
                                    type="checkbox"
                                    className="appearance-none bg-slate-100 hover:bg-white rounded-full w-full h-full peer cursor-pointer"
                                    checked={isChecked}
                                    onClick={(e) => handdleCheck(e)}
                                />
                                <Icon           
                                    icon="lets-icons:check-fill" 
                                    color="#76e542" 
                                    className="absolute top-0 -ml-[3px] -mt-[3px] hidden peer-checked:block pointer-events-none"
                                    width={30}
                                    height={30}
                                />
                            </div>
                        </td>
                    </tr >
                    {
                        toggle && 
                        <tr>
                            <td colSpan={5} className="py-4 px-6 text-wrap overflow-hidden max-w-[400px] bg-primary-soLight">
                                {classData.note}
                            </td>
                        </tr>
                    }
                </>
            }
        </> 
    );
}
 
export default ClassRow;