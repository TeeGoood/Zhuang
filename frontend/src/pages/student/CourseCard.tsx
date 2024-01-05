import { Link } from "react-router-dom";
import { course } from "../../types";
import { useEffect, useState } from "react";
import axios from "axios";

const CourseCard = ({courseId} : {courseId : String}) => {
    const [course, setCourse] = useState<course>();
    const uri : string = `${import.meta.env.VITE_API_DOMAIN}/courses/${courseId}`;

    useEffect(() => {
        fetchCourse(uri);
    }, [])

    const fetchCourse = async (uri:string) => {
        try{
            const response = await axios.get(uri);
            const data = response.data;
            setCourse(data[0]); 
            console.log(data[0]);
        }
        catch(err){
            console.log(err);
        }
    }


    return (  
        <>
            {course &&
                <Link to={`/courses/${course._id}`} className="flex flex-col gap-4 border border-primary-light p-4 rounded-lg shadow-md shadow-primary-soLight hover:shadow-lg hover:shadow-primary-soLight transition cursor-pointer">
                    <p className="text-2xl">{course.name}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col text-slate-400 text-xs" >
                            <span>
                                เรียนไปเเล้ว
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="text-xl text-primary-normal">
                                    {`${course.classes.length} / ${course.courseLength}`}
                                </span>
                                <span>
                                    ครั้ง
                                </span>
                            </span>
                        </div>
                        <div className={`${ course.paid === course.courseLength ? "bg-approval-normal" : "bg-danger-normal"} text-white py px-3 rounded-full`} >
                            {course.paid === course.courseLength ? "เรียบร้อย" : "ไม่เรียบร้อย"}
                        </div>
                    </div>
                </Link>
            }
        </>
    );
}
 
export default CourseCard;