import { useParams } from "react-router-dom";
import UpdateWrapper from "../../components/update/UpdateWrapper";
import { course } from "../../types";
import Mode from "../../components/forms/Mode";

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
                {/* <div className="text-slate-400 text-xs flex items-center gap-2">
                    จ่ายเเล้ว
                    <span className={`text-xl ${course.paid === course.courseLength ? "text-approval-normal" : "text-danger-normal"} `}>
                        {course.isPaid ? "จ่ายเเล้ว" : "ยังไม่จ่าย"} 
                    </span>
                </div> */}
            </div>
        </div>
    );
}
 
export default CourseInfo;