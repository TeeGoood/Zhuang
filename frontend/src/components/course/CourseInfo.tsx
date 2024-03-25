import { useParams } from "react-router-dom";
import UpdateWrapper from "../update/UpdateWrapper";
import { course } from "../../types";
import Mode from "../forms/Mode";

const CourseInfo = ({course} : {course : course}) => {
    const {id} = useParams();
    console.log()

    return (  
        <div className="bg-primary-soLight py-4 px-7 rounded-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
                <p className="text-2xl font-semibold text-primary-normal">{course.name}</p>
                <UpdateWrapper path={`/courses/${id}`} mode={Mode.COURSE} oldData={course} />
            </div>

            <div className="flex gap-4 items-center">
                <div className="text-slate-400 text-xs flex items-center gap-2">
                    เรียนไปเเล้ว
                    <span className="text-xl text-primary-normal">
                        {`${course.classes.length}/${course.courseLength}`}
                    </span>
                </div>
                <div className="text-slate-400 text-xs flex items-center gap-2">
                    จ่ายเเล้ว
                    <span className={`text-xl ${course.paidClasses.length === course.courseLength ? "text-approval-normal" : "text-danger-normal"} `}>
                        {course.paidClasses.length === course.courseLength ? "เรียบร้อย" : "ไม่เรียบร้อย"} 
                    </span>
                </div>
            </div>
        </div>
    );
}
 
export default CourseInfo;