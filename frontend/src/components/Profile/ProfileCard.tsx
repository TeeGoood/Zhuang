import { Icon } from "@iconify/react/dist/iconify.js";
import { student } from "../../types";

const ProfileCard = ({student} : {student : student}) => {
    return (  
        <div className="bg-primary-soLight py-4 px-8 rounded-lg flex items-center justify-between ">
            <div className="flex flex-col gap-1 ">
                <div className="text-xl font-bold flex gap-4 items-center">
                    <span>{student.username}</span>
                    <Icon 
                        icon="pepicons-pencil:pen" color="#3559e0"
                        className="hover:bg-primary-light rounded-full w-7 h-7 p-1 transition cursor-pointer" />
                </div>
                <span className="text-primary-normal">
                    {`${student.fname} ${student.lname}`}
                </span>
            </div>
            <div className="flex gap-2 items-center">
                <span className="font-bold text-primary-normal text-xl">{student.courses.length}</span>
                <span>คอร์ส</span>
            </div>
        </div>
    );
}
 
export default ProfileCard;