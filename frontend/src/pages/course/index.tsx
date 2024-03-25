import { Icon } from "@iconify/react/dist/iconify.js";
import Header from "../../components/Header";
import CourseInfo from "../../components/course/CourseInfo";
import ClassTable from "../../components/class/ClassTable";
import Mode from "../../components/forms/Mode";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { course } from "../../types";
import axios from "axios";
import DeleteWrapper from "../../components/delete/DeleteWrapper";

const Course = () => {
    const setMode : React.Dispatch<React.SetStateAction<Mode>> = useOutletContext();
    const [course, setCourse] = useState<course>();
    const {id} = useParams();
    const url : string = `${import.meta.env.VITE_API_URL}/courses/${id}`;
    
    useEffect(() => {
        fetchCourse(url);
    }, [id]);

    const fetchCourse = async (url:string) => {
        try{
            const response = await axios.get(url);
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
                <div className="p-10 flex-1 flex flex-col gap-7">
                    <div className="flex items-center">
                        <Link to={`/students/${course.parentId}`}>
                            <Icon icon="material-symbols-light:arrow-back-ios" color="#3559e0" className="w-10 h-10  rounded-full p-1 transition hover:bg-primary-soLight" />
                        </Link>
                        <div className="flex items-center justify-between flex-1">
                            <Header text="ข้อมูลคอร์ส" />
                            <DeleteWrapper name={course.name} url={`/courses/${id}`} />
                        </div>
                    </div>
                    <CourseInfo course={course}/>
                    <div className="flex justify-between">
                        <Header text={"คลาสเรียน"} />
                        {course.classes.length < Number(course.courseLength) && 
                        <button 
                            className="bg-primary-normal text-white px-2 rounded-full hover:bg-primary-notThatLight transition flex gap-2 items-center"
                            onClick={() => setMode(Mode.CLASS)}
                        >
                            <span >
                                เพิ่มคลาส
                            </span>
                            <Icon icon="typcn:plus" color="white" />
                        </button>}
                    </div>
                    <ClassTable classes={course.classes}/>
                </div>
            }
        </>
    );
}
 
export default Course;