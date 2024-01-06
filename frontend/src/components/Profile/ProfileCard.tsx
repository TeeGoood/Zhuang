import { student } from "../../types";
import Mode from "../forms/Mode";
import UpdateWrapper from "../update/UpdateWrapper";

const ProfileCard = ({student} : {student : student}) => {
    return (  
        <div className="bg-primary-soLight py-4 px-8 rounded-lg flex items-center justify-between ">
            <div className="flex flex-col gap-1 ">
                <div className="text-xl font-bold flex gap-4 items-center">
                    <span>{student.username}</span>
                    <UpdateWrapper path={`/students/${student._id}`} mode={Mode.STUDENT} oldData={student}/>
                </div>
                <span className="text-primary-normal">
                    {`${student.note}`}
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