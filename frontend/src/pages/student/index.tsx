import { Icon } from "@iconify/react/dist/iconify.js";
import Header from "../../components/Header";
import ProfileCard from "../../components/Profile/ProfileCard";
import CoursesList from "../../components/course/CoursesList";
import Mode from "../../components/forms/Mode";
import { useOutletContext, useParams } from "react-router-dom";
import { student } from "../../types";
import { useEffect, useState } from "react";
import axios from "axios";
import DeleteWrapper from "../../components/delete/DeleteWrapper";

const Student = () => {
    const setMode : React.Dispatch<React.SetStateAction<Mode>> = useOutletContext();
    const [student, setStudent] = useState<student>();
    const {id} = useParams();
    const url = `${import.meta.env.VITE_API_URL}/students/${id}`;

    useEffect(() => {
        fetchStudent(url);
    },[id]);

    const fetchStudent = async (url : string) => {
        try{
            const response = await axios.get(url);
            const data = response.data;
            setStudent(data);
        }
        catch(err){
            console.log(err);
        }
    }

    return (  
        <div className="flex-1 p-10 flex flex-col gap-7">
            {student && 
                <> 
                    <div className="flex justify-between items-center">
                        <Header text={"ข้อมูลส่วนตัว"} />
                        <DeleteWrapper name={student.username} url={`/students/${id}`} />
                    </div>
                    
                    <ProfileCard student={student} />
                    <div className="flex justify-between">
                        <Header text={"คอร์สเรียน"} />
                        <button 
                            className="bg-primary-normal text-white px-2 rounded-full hover:bg-primary-notThatLight transition flex gap-2 items-center" onClick={() => setMode(Mode.COURSE)}
                        >
                            <span >
                                เพิ่มคอร์ส
                            </span>
                            <Icon icon="typcn:plus" color="white" />
                        </button>
                    </div>
                    <CoursesList courses={student.courses} />
                </>
            }
        </div>
    );
}
 
export default Student;